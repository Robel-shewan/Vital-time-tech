// "use client"; // Ensure this directive is at the top

// import React, { useState } from "react";
// import {
//   DndContext,
//   closestCenter,
//   useSensor,
//   useSensors,
//   PointerSensor,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { SortableItem } from "./SortableItem";
// import { CSS } from "@dnd-kit/utilities";

// interface Item {
//   id: string;
//   content: string;
//   image: string;
// }

// const items: Item[] = [
//   {
//     id: "1",
//     content: "Scotland Island",
//     image: "51ba7cdf-7a70-49e0-826b-b23bbcceeeef.jpeg",
//   },
//   {
//     id: "2",
//     content: "The Charles Grand Brasserie & Bar",
//     image: "294f1de0-85ce-4fc6-b3ec-9a14c8c850f9.jpeg",
//   },
//   {
//     id: "3",
//     content: "Bridge Climb",
//     image: "a98a46dd-baeb-4bc6-bc46-2d3ebfdb5feb.jpeg",
//   },
//   {
//     id: "4",
//     content: "Scotland Island",
//     image: "b5269d29-63d0-48c1-894f-699b664c0d14.jpeg",
//   },
//   {
//     id: "5",
//     content: "Clam Bar",
//     image: "download.png",
//   },
//   {
//     id: "6",
//     content: "Vivid Festival",
//     image: "51ba7cdf-7a70-49e0-826b-b23bbcceeeef.jpeg",
//   },
// ];

// const DraggableList: React.FC = () => {
//   const [list, setList] = useState<Item[]>(items);

//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 5,
//       },
//     })
//   );

//   const handleDragEnd = (event: any) => {
//     const { active, over } = event;
//     if (active.id !== over.id) {
//       setList((items) => {
//         const oldIndex = items.findIndex((item) => item.id === active.id);
//         const newIndex = items.findIndex((item) => item.id === over.id);
//         return arrayMove(items, oldIndex, newIndex);
//       });
//     }
//   };

//   return (
//     <DndContext
//       sensors={sensors}
//       collisionDetection={closestCenter}
//       onDragEnd={handleDragEnd}
//     >
//       <SortableContext items={list} strategy={verticalListSortingStrategy}>
//         <ul className="list-none p-0 m-0">
//           {list.map(({ id, content, image }) => (
//             <SortableItem key={id} id={id}>
//               <li className="bg-white shadow-md p-4 mb-2 flex items-center justify-between">
//                 <div className="flex items-center">
//                   <img src={image} alt="thumbnail" className="w-16 h-16 mr-4" />
//                   <div>
//                     {/* <p className="font-bold">{content}</p> */}
//                     <p className=" text-gray-900 font-bold">{content}</p>
//                     <p className="text-gray-500 font-bold">{content}</p>
//                   </div>
//                 </div>
//               </li>
//             </SortableItem>
//           ))}
//         </ul>
//       </SortableContext>
//     </DndContext>
//   );
// };

// export default DraggableList;
"use client"; // Ensure this directive is at the top

import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { items, Item } from "./data"; // Import data

const DraggableList: React.FC = () => {
  const [list, setList] = useState<Item[]>(items);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={list} strategy={verticalListSortingStrategy}>
        <ul className="list-none p-0 m-0">
          {list.map(({ id, content, image, location }) => (
            <SortableItem key={id} id={id}>
              <li className="bg-white shadow-md p-4 mb-4 flex items-center justify-between rounded-lg hover:shadow-lg hover:bg-gray-90 transition-shadow">
                <div className="flex items-center">
                  <img
                    src={image}
                    alt="thumbnail"
                    className="w-16 h-16 mr-4 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{content}</p>
                    <p className="text-gray-500">{location}</p>
                  </div>
                </div>
              </li>
            </SortableItem>
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};

export default DraggableList;
