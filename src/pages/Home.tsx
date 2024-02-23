import { IconBanner, ImageBanner, InfoCard } from "../components/pages/home";
// import image from "../assets/evelyn-semenyuk-djVKFrCCTkI-unsplash_6_11zon.jpg"
import { useGetMenuItemsQuery } from "../api/menuItemApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItems } from "../storage/redux/menuItemSlice";
import { BannerItemModel, MenuItemModel } from "../interfaces";
import { RootState } from "../storage/redux/store";
// import img from "./../" 

const Home = () => {

  // Artificial Data
  // const list: BannerItemModel[] = [
  //   { name: "main dishe", picture: image },
  //   { name: "guarniciones", picture: image },
  //   { name: "sopas", picture: image },
  // ];


  // dispatch
  const dispatch = useDispatch();

  // // Api Get Items
  // const { data } = useGetMenuItemsQuery(null);
  // // State Set Items
  // useEffect(() => {
  //   if (data) {
  //     // State Set Items
  //     dispatch(setMenuItems(data.result))
  //   }
  // }, [data])

  // State Get items
  const { menuItems } = useSelector((state: RootState) => state.menuItemStore);

  // set-get Categories
  const [categoryItems, setCategoryItems] = useState<BannerItemModel[]>([]);

  useEffect(() => {
    const itemMapped: {[key: string]: boolean} = {};
    const FilteredArray: BannerItemModel[] = [];
    if (menuItems) {         //data
      menuItems.forEach((item: MenuItemModel) => {    //data
        if (!itemMapped[item.category]) {
          itemMapped[item.category] = true;
          FilteredArray.push({ name: item.category, picture: item.image });
          // console.log(FilteredArray);
        }
      });
    }
    setCategoryItems(FilteredArray);
  }, [menuItems])       // data



  return (
    <>
      <ImageBanner items={categoryItems.slice(0,3)}/>
      <InfoCard />
      <IconBanner />
    </>
  )
};

export default Home;
