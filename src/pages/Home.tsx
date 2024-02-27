import { HeroSection, IconBanner, ImageBanner, InfoCard } from "../components/pages/home";
import { useGetMenuItemsQuery } from "../api/menuItemApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItems } from "../storage/redux/menuItemSlice";
import { BannerItemModel, MenuItemModel } from "../interfaces";
import { RootState } from "../storage/redux/store";

import image2 from "../assets/micheile-henderson-doeWwiscUPI-unsplash.jpg";
import image3 from "../assets/victoria-shes-Qa29U4Crvn4-unsplash.jpg";


const Home = () => {

  // Artificial Data
  const infoCardData = [
    { title: "Lorem ipsum dolor sit amet.", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minima consectetur iste asperiores vel ducimus fugit hic quisquam eaque sunt."},
    { title: "Lorem ipsum dolor sit amet.", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas incidunt, debitis minus enim aspernatur inventore esse hic explicabo?" },
  ];


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
      <HeroSection/>
      <IconBanner />
      <InfoCard title={infoCardData[0].title} paragraph={infoCardData[0].paragraph} image={image2} />
      <ImageBanner items={categoryItems.slice(0,3)}/>
      <InfoCard title={infoCardData[1].title} paragraph={infoCardData[1].paragraph} image={image3} orientation="right" />
    </>
  )
};

export default Home;
