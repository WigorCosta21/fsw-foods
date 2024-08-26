import { db } from "@/lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  const categories = await db.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.name} />
      ))}
    </div>
  );
};

export default CategoryList;
