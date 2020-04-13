import React from "react";
import { Modal, Form, Input, Select, Button } from "antd";

interface AddPersonPropsType {
  addPerson: Function;
  toggleAddModal: Function;
  showAddModal: boolean;
}
interface AddPersonStateType {}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
class AddPerson extends React.Component<
  AddPersonPropsType,
  AddPersonStateType
> {
  // 此处场景用不到state 用到自加
  // state = {};
  formRef: any = React.createRef();
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  onFinish = (values: any) => {
    this.props.addPerson(values);
  };
  render() {
    const { showAddModal, toggleAddModal } = this.props;
    const Option = Select.Option;
    return (
      <Modal
        title="Basic Modal"
        visible={showAddModal}
        onOk={() => toggleAddModal()}
        onCancel={() => toggleAddModal()}
      >
        <Form
          {...layout}
          ref={this.formRef}
          name="control-ref"
          onFinish={this.onFinish}
        >
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) => {
              return getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              ) : null;
            }}
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={this.onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={this.onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default AddPerson;
