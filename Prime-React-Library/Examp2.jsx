import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const Examp2 = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button label="Show Dialog" onClick={showDialog} />
      <Dialog header="Dialog Title" visible={visible} onHide={hideDialog}>
        <p>This is a dialog content.</p>
        <Button label="Close" onClick={hideDialog} />
      </Dialog>
    </div>
  );
};

export default Examp2;