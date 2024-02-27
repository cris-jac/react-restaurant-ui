import { HeroSection, IconBanner, ImageBanner, InfoCard } from "../components/pages/home";
// import { useGetMenuItemsQuery } from "../api/menuItemApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { setMenuItems } from "../storage/redux/menuItemSlice";
import { BannerItemModel, MenuItemModel } from "../interfaces";
import { RootState } from "../storage/redux/store";

import image2 from "../assets/micheile-henderson-doeWwiscUPI-unsplash.jpg";
import image3 from "../assets/victoria-shes-Qa29U4Crvn4-unsplash.jpg";


const Home = () => {

  // Text data
  const infoCardData = [
    { title: "Wholesome... like you", paragraph: "With a commitment to quality and sustainability, we take pride in sourcing ingredients directly from our organic gardens. Every bite is infused with the vibrant colors, rich flavors, and juicy textures of freshly harvested produce, guaranteeing a culinary experience that is both wholesome and delicious."},
    { title: "Eco-friendly", paragraph: "In partnership with our organic garden collaborators and a dedication to a plant-based menu, we are committed to promoting sustainability in every aspect of our restaurant. From farm to table, we prioritize eco-friendly practices, minimizing our environmental footprint while delivering fresh, nutritious, and ethically sourced meals to our patrons." },
  ];


  // dispatch
  // const dispatch = useDispatch();

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
