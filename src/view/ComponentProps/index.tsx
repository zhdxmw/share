import React, { useState } from "react";
import { Card, Button } from "antd";
import AddPerson from "@/components/addPerson";

const ComponentProps = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const addPerson = (addPerson: any) => {
    console.log(addPerson);
    setShowAddModal(!showAddModal);
  };

  return (
    <Card>
      <Button onClick={() => setShowAddModal(!showAddModal)}>显示</Button>
      <AddPerson
        showAddModal={showAddModal}
        toggleAddModal={() => setShowAddModal(!showAddModal)}
        addPerson={addPerson}
      />
    </Card>
  );
};
export default ComponentProps;

//https://reacttraining.com/react-router/web/example/nesting
