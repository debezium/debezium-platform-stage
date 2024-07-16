import * as React from 'react';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateFooter,
  PageSection,
} from '@patternfly/react-core';
import { useNavigate } from 'react-router-dom';
// import { useDocumentTitle } from '../../utils/useDocumentTitle';

const NotFound: React.FunctionComponent = () => {

  // useDocumentTitle("404 Page Not Found");

  function GoHomeBtn() {
    const navigate = useNavigate();
    function handleClick() {
      navigate('/');
    }
    return (
      <Button onClick={handleClick}>Take me home</Button>
    );
  }

  return (
    <PageSection>
    <EmptyState variant="full" titleText="404">
      
      <EmptyStateBody>
        We didn&apos;t find a page that matches the address you navigated to.
      </EmptyStateBody><EmptyStateFooter>
      <GoHomeBtn />
    </EmptyStateFooter></EmptyState>
  </PageSection>
  )
};

export { NotFound };
