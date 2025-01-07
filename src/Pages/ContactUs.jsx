import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";
const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted: ", values);
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <Card bordered={false} style={{ borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
          <Title level={3} style={{ textAlign: "center" }}>
            Contact Us
          </Title>
          <Paragraph style={{ textAlign: "center", marginBottom: "24px" }}>
            We would love to hear from you! Please fill out the form below to get in touch.
          </Paragraph>
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            style={{ marginTop: "20px" }}
          >
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter your full name" }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, type: "email", message: "Please enter a valid email address" }]}
            >
              <Input placeholder="Enter your email address" />
            </Form.Item>
            <Form.Item label="Subject" name="subject">
              <Input placeholder="Enter the subject" />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;


