"use client";

import { useState, useEffect } from "react";
import Cover from "@/components/shared/Cover";
import TeachersTab from "@/components/core/TeachersTab";
import Container from "@/components/shared/Container";

interface Member {
  name: string;
  designation: string;
  qualification: string;
  phone: string;
  email: string;
  image: string;
}

interface Category {
  category: string;
  members: Member[];
}

export default function PeoplePage() {
  const [data, setData] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<string>("Lab Assistants");
  const [filteredData, setFilteredData] = useState<Member[]>([]);

  useEffect(() => {
    fetch("/teachers.json")
      .then((res) => res.json())
      .then((data: Category[]) => {
        setData(data);
        const defaultCategory = data.find(
          (category) => category.category === "Lab Assistants",
        );
        setFilteredData(defaultCategory?.members || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const currentCategory = data.find(
      (category) => category.category === activeTab,
    );
    setFilteredData(currentCategory?.members || []);
  }, [activeTab, data]);

  const tabs = ["Lab Assistants", "IT Officers", "Administrative Staffs"];

  return (
    <>
      <Cover
        heading="Lab Instructors"
        title="Lab Instructors"
        subTitle="People"
        subTitleLink="/graduate-program"
        mainTitle="Home"
        titleLink="/"
      />
      <Container>
        <div className="flex my-5 flex-col gap-5 md:gap-20 p-4 md:flex-row">
          <div className="w-full flex flex-col gap-2 md:w-1/4">
            <h2 className="mb-4 text-lg font-bold">People</h2>
            <TeachersTab
              tabs={tabs}
              activeTab={activeTab}
              onTabClick={(tab) => setActiveTab(tab)}
            />
          </div>

          <div className="w-full md:w-3/4">
            <h2 className="mb-4 text-2xl font-bold">{activeTab}</h2>
            <div className="grid grid-cols-1 gap-4">
              {filteredData.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 border-b border-gray-300 pb-4 md:flex-row"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-lg font-bold">{member.name}</p>
                    <p>{member.designation}</p>
                    <p>
                      <strong>Qualification:</strong>{" "}
                      {member.qualification || "N/A"}
                    </p>
                    <p>
                      <strong>Phone:</strong> {member.phone || "N/A"}
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-500 underline"
                      >
                        {member.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
