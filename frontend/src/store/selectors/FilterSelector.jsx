import { selector } from "recoil";
import { FilterAtom } from "../atoms/FilterAtom";
import { TodoAtom } from "../atoms/TodoAtom";

export const FilterSelector = selector({
    key: "FilterSelector",
    get: ({ get }) => {
        const todos = get(TodoAtom);
        const filter = get(FilterAtom);
        return todos.filter((todo) => {
            const todoTitle = todo.title.split(" ");
            const todoDescription = todo.description.split(" ");
            return todoTitle.includes(filter) || todoDescription.includes(filter);
        });
    },
});
