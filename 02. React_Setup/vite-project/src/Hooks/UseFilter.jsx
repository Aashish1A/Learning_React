import { useState } from "react";

export function UseFilter(dataList, callback){
    const [query, setQuery] = useState("");

    const filteredData = dataList.filter((data) => {
        return callback(data).toLowerCase().includes(query);
    })

    return [filteredData, setQuery];
}