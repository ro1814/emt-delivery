import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../styles/EmtScreenStyles.css";

export const EmtScreen = () => {
  return (
    <>
      <h1 className="emtTitle">EMT Reporting</h1>
      <Container>
        <h2 className="emtSubtitle">Select upload type</h2>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                className="checkBox"
                label="Client Scope"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                className="checkBox"
                label="Asset Manager"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Format: xls, Max size 5MB</Form.Label>
          <Form.Control type="file" size="sm" />
          
        </Form.Group>
      </Container>
    </>
  );
};
