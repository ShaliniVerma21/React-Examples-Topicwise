import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const Examp1 = () => {
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Operation completed successfully!' });
  };

  return (
    <div>
      <Toast ref={toast} />
      <Button label="Show Success Toast" onClick={showSuccess} />
    </div>
  );
};

export default Examp1;