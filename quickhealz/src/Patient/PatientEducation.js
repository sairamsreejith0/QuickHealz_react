import React from "react";
import { Card, Table } from "antd";

import "../Patient_styles/PatientEducation.css";
import { useEffect,useState } from "react";


const PatientEducation = () => {
  const [educationrecords, setEducationRecords] = useState([]);
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/educationResource/");
        const data = await response.json();
        const educationrecords = data.education || [];
        setEducationRecords(educationrecords);
        // handle response here
      } catch (error) {
        // handle error here
      }
    }

    fetchEducation();
  }, []);
  
  const columns = [
    {
      title: "Posted by",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "resource",
      dataIndex: "text",
      key: "text",
    },
  ];

  return (
    <div className="patient-education">
      <Card title="Patient Education Resources">
        <Table dataSource={educationrecords} columns={columns}>
          {educationrecords.map((educationrecord) => (
            <Table.ColumnGroup key={educationrecord.id}>
              <Table.Row>
                <Table.Cell>{educationrecord.email}</Table.Cell>
                <Table.Cell>{educationrecord.text}</Table.Cell>
              </Table.Row>
            </Table.ColumnGroup>
          ))}
        </Table>
      </Card>
    </div>
  );
}

export default PatientEducation;
