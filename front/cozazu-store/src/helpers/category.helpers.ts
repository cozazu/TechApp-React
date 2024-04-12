import { categoriesToPreLoad } from "@/utils/preLoadData"

async function getCategories() {
  return categoriesToPreLoad
}

export { getCategories }