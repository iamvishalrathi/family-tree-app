"use client"
import React from 'react';
import TreeIcon from '../../../../components/ui/TreeIcon'; // Import your TreeIcon component

const FamilyTree = () => {
    const trees = [
        { id: 1, name: 'Smith Family Tree' },
        { id: 2, name: 'Johnson Family Tree' },
    ];

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Family Trees</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {trees.map((tree) => (
                    <div
                        key={tree.id}
                        className="flex flex-col items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <TreeIcon className="w-16 h-16 text-gray-700 mb-4" />
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">{tree.name}</h2>
                        <a
                            href={`/family-tree/${tree.id}`}
                            className="text-blue-500 hover:underline"
                        >
                            View Tree
                        </a>
                    </div>
                ))}

                <div
                    className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => {
                        // Handle create new tree logic here (e.g., navigate to a form)
                    }}
                >
                    <TreeIcon className="w-16 h-16 text-blue-500 mb-4" />
                    <p className="text-lg font-semibold text-blue-500">Create New Tree</p>
                </div>
            </div>
        </div>
    );
};

export default FamilyTree;