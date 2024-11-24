"use client";
import React from "react";

const members = [
    { id: 1, name: "Binesh Rathi", relationship: "Living", photo: "https://avatar.iran.liara.run/public/boy?username=abcd", parentId: null },
    { id: 2, name: "Guddi Devi", relationship: "Living", photo: "https://avatar.iran.liara.run/public/girl?username=abcd", parentId: null },
    { id: 3, name: "Baby Rathi", relationship: "Living", photo: "https://avatar.iran.liara.run/public/girl?username=abcd", parentId: null },
    { id: 4, name: "Aakash Rathi", relationship: "Living", photo: "https://avatar.iran.liara.run/public/boy?username=abcd", parentId: 1 },
    { id: 5, name: "Mahima Rathi", relationship: "Living", photo: "https://avatar.iran.liara.run/public/girl?username=abcd", parentId: 1 },
    { id: 6, name: "Meenu Rathi", relationship: "Living", photo: "https://avatar.iran.liara.run/public/girl?username=abcd", parentId: 1 },
    { id: 7, name: "Pooja Rathi", relationship: "Living", photo: "https://avatar.iran.liara.run/public/girl?username=abcd", parentId: 1 },
];

const renderTree = (members, parentId) => {
    const children = members.filter((member) => member.parentId === parentId);

    if (children.length === 0) return null;

    return (
        <div className="flex flex-col items-center">
            <div className="flex space-x-6 mt-6 relative">
                {children.map((child) => (
                    <div key={child.id} className="text-center">
                        {/* Connecting Line */}
                        <div className="absolute top-12 w-full flex justify-center -z-10">
                            <div className="h-[2px] bg-gray-500 w-10"></div>
                        </div>
                        {/* Member Card */}
                        <div className="relative bg-white p-4 rounded-lg shadow-lg border">
                            <img
                                src={child.photo}
                                alt={child.name}
                                className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-gray-300"
                            />
                            <p className="mt-2 text-gray-700 text-sm font-semibold">{child.name}</p>
                            <p className="text-xs text-gray-500">{child.relationship}</p>
                        </div>
                        {/* Recursive Children */}
                        {renderTree(members, child.id)}
                    </div>
                ))}
            </div>
        </div>
    );
};

const FamilyTree = () => {
    return (
        <div className="min-h-screen bg-gray-200 p-10">
            <h1 className="text-center text-3xl font-bold text-gray-800">Family Tree</h1>
            <div className="mt-8 flex flex-col items-center">
                <div className="text-center">
                    {/* Root Nodes */}
                    <div className="relative bg-white p-4 rounded-lg shadow-lg border">
                        <img
                            src={members[0].photo}
                            alt={members[0].name}
                            className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-gray-300"
                        />
                        <p className="mt-2 text-gray-700 text-sm font-semibold">{members[0].name}</p>
                        <p className="text-xs text-gray-500">{members[0].relationship}</p>
                    </div>
                    {renderTree(members, 1)}
                </div>
            </div>
        </div>
    );
};

export default FamilyTree;