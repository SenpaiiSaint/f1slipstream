import React from "react";

export const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <img 
        src="https://api.dicebear.com/9.x/glass/svg?seed=Jameson" 
        alt="avatar"
        className="size-8 rounded shrink-0 bg-sky-400 shadow"
        />
        <div className="text-start">
            <span className="text-sm font-bold block"> Lewis Hamilton</span>
            <span className="text-xs block text-stone-500">@rarilewis</span>
        </div>
      </button>
    </div>
  );
};


/* Going to change this to potentially a logo instead 
  mb-4 and mt-2 control spacing adjust accordingly 
*/