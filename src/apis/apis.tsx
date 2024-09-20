import { QueryClient, useMutation, useQueryClient } from "react-query";
import { API_URL } from "../utils/constants";
const queryClient = new QueryClient();

/* eslint-disable @typescript-eslint/no-explicit-any */
// export const fetchSources = async () => {
//   const response = await fetch("http://localhost:8080/api/sources", {
//     mode: "no-cors", // Not recommended for production
//   });
//   return response.json();
// };

export type ApiResponse<T> = {
  data?: T | null;
  error?: string;
};

export type Vault = {
  name: string;
  id: number;
};

export type Transform = {
  name: string;
  id: number;
};

export type PipelineDestination = {
  name: string;
  id: number;
};

export type PipelineSource = {
  name: string;
  id: number;
};

export type DestinationConfig = {
  [key: string]: string; // Dynamic keys with string values
};

export type Destination = {
  type: string;
  schema: string;
  vaults: Vault[];
  config: DestinationConfig;
  description?: string;
  name: string;
  id: number;
};

export type Pipeline = {
  name: string;
  id: number;
  source: PipelineSource;
  destination: PipelineDestination;
  description?: string;
  transforms: Transform[];
  logLevel: string;
};

export type DestinationApiResponse = Destination[];

export type SourceConfig = {
  [key: string]: string; // Dynamic keys with string values
};

export type Source = {
  type: string;
  schema: string;
  vaults: Vault[];
  config: SourceConfig;
  description?: string;
  name: string;
  id: number;
};

export type SourceApiResponse = Source[];

export type PipelineApiResponse = Pipeline[];

export const createPost = async <T,>(
  url: string,
  payload: any
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorMsg = `Failed to create source: ${response.statusText}`;
      return { error: errorMsg };
    }

    const data = await response.json();
    // Refresh data after source is created
    queryClient.invalidateQueries("sources");

    return { data };
  } catch (error) {
    console.error("Error creating source:", error);
    return { error: "An error occurred while creating source" };
  }
};

export const editPut = async <T,>(
  url: string,
  payload: any
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorMsg = `Failed to create source: ${response.statusText}`;
      return { error: errorMsg };
    }

    const data = await response.json();
    // Refresh data after source is created
    queryClient.invalidateQueries("sources");

    return { data };
  } catch (error) {
    console.error("Error creating source:", error);
    return { error: "An error occurred while creating source" };
  }
};

export const deleteResource = async <T,>(
  url: string
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorMsg = `Failed to delete resource: ${response.statusText}`;
      return { error: errorMsg };
    }

    let data: T;
    if (response.status === 204) {
      data = {} as T;
    } else {
      data = await response.json();
    }

    // Refresh data after resource is deleted
    queryClient.invalidateQueries("sources");
    queryClient.invalidateQueries("destinations");

    return { data };
  } catch (error) {
    console.error("Error deleting resource:", error);
    return { error: "An error occurred while deleting resource" };
  }
};

// export const fetchSources = async <T,>(): Promise<T> => {
//   const response = await fetch("/api/sources");
//   if (!response.ok) {
//     throw new Error(`Failed to fetch data: ${response.statusText}`);
//   }
//   return response.json();
// };

export const fetchData = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
};

export const deleteData = async (url: string): Promise<void> => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers if needed
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete data: ${response.statusText}`);
  }
};

export const useDeleteData = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>(
    (id: string) => deleteData(`${API_URL}/api/pipelines/${id}`),
    {
      onSuccess: () => {
        // Invalidate and refetch the data after deletion
        queryClient.invalidateQueries("pipelinesDelete");
      },
    }
  );
};

export const fetchDataTypeTwo = async <T,>(
  url: string
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorMsg = `Failed to fetch data: ${response.statusText}`;
      return { error: errorMsg };
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "An error occurred while fetching data" };
  }
};

export const fetchDataWithPolling = async <T,>(
  url: string,
  interval: number = 15000 // Default polling interval of 15 seconds
): Promise<ApiResponse<T>> => {
  try {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        const errorMsg = `Failed to fetch data: ${response.statusText}`;
        return { error: errorMsg };
      }

      const data = await response.json();
      return { data };
    };

    const poll = async () => {
      const result = await fetchData();
      if (!result.error) {
        queryClient.setQueryData<T>(url, result.data); // Update query data
      }
      setTimeout(poll, interval);
    };

    // Initial fetch
    const initialResult = await fetchData();
    if (initialResult.error) {
      return initialResult;
    }
    queryClient.setQueryData<T>(url, initialResult.data);

    // Start polling
    setTimeout(poll, interval);

    return initialResult;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "An error occurred while fetching data" };
  }
};

export const fetchFile = async (
  url: string
): Promise<Blob | { error: string }> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorMsg = `Failed to fetch file: ${response.statusText}`;
      return { error: errorMsg };
    }

    // Return the response as a Blob
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error("Error fetching file:", error);
    return { error: "An error occurred while fetching the file" };
  }
};
