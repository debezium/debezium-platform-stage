import React from "react";

import mongoDB from "../assets/MongoDB.png";
import cassandra from "../assets/Cassandra.png";
import mySql from "../assets/my-sql.png";
import postgreSql from "../assets/PostgreSQL.png";
import sqlServer from "../assets/sql-server.png";
import apachePulsar from "../assets/apachePulsar.png";
import rocketMq from "../assets/Apache_RocketMQ.png";
import eventHub from "../assets/Azure-event-hub.png";
import pubsub from "../assets/G_pubsub.png";
import rabbitMq from "../assets/RabbitMQ.png";
import natsStreaming from "../assets/NATS_stream.png";
import kafka from "../assets/kafka.png";
import infinispan from "../assets/infinispan.png";
import pubsubLite from "../assets/pub-sub-lite.png";
import pravega from "../assets/pravega.webp";
import dbz from "../assets/dbz_logo.png";

interface ConnectorImageProps {
  connectorType: string;
  size?: number;
}

const ConnectorImage: React.FC<ConnectorImageProps> = ({
  connectorType = "",
  size,
}) => {
  let src = "";

  switch (true) {
    case connectorType.includes("mongo"):
      src = mongoDB;
      break;
    case connectorType.includes("postgre"):
      src = postgreSql;
      break;
    case connectorType.includes("cassandra"):
      src = cassandra;
      break;
    case connectorType.includes("mysql"):
      src = mySql;
      break;
    case connectorType.includes("sqlserver"):
      src = sqlServer;
      break;
    case connectorType.includes("apachepulsar"):
      src = apachePulsar;
      break;
    case connectorType.includes("rocketmq"):
      src = rocketMq;
      break;
    case connectorType.includes("eventhub"):
      src = eventHub;
      break;

    case connectorType.includes("rabbitmq"):
      src = rabbitMq;
      break;
    case connectorType.includes("natsstreaming"):
      src = natsStreaming;
      break;
    case connectorType.includes("kafka"):
      src = kafka;
      break;
    case connectorType.includes("infinispan"):
      src = infinispan;
      break;
    case connectorType.includes("pubsublite"):
      src = pubsubLite;
      break;
    case connectorType.includes("pubsub"):
      src = pubsub;
      break;
    case connectorType.includes("pravega"):
      src = pravega;
      break;
    case connectorType.includes("debezium"):
      src = dbz;
      break;
  }

  return size ? (
    <img src={src} alt={`mongo icon`} style={{ maxHeight: `${size}px` }} />
  ) : (
    <img src={src} alt={`mongo icon`} style={{ maxHeight: "60px" }} />
  );
};

export default ConnectorImage;
