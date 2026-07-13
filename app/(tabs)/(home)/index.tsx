import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { MoveUpRight } from "lucide-react-native";
import { useCallback, useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cart from "@/components/shop/cart";
import Category from "@/components/shop/category";
import Product from "@/components/shop/product";
import Title from "@/components/shop/title";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { VStack } from "@/components/ui/vstack";
import { categories, products } from "@/data";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const [select, setSelect] = useState(1);
  const width = Dimensions.get("screen").width;
  const numColumns = width < 600 ? 2 : width < 768 ? 3 : 4;

  const handleSelect = useCallback((id: number) => {
    setSelect(id);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HStack className="mb-3 items-center justify-between px-4">
        <Pressable>
          <Image
            style={{ width: 56, height: 28 }}
            source={require("@/assets/images/n.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </Pressable>
        <Pressable className="mr-2">
          <Cart />
        </Pressable>
      </HStack>
      <ScrollView>
        <Image
          style={{ width: "100%", aspectRatio: 20 / 9 }}
          source={require("@/data/shop/banner6.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <VStack className="mt-4 px-5">
          <Title title="Shop by Category" actionText="See All" />
          <FlashList
            data={categories}
            extraData={select}
            renderItem={({ item }) => (
              <Category {...item} select={select} onSelect={handleSelect} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ paddingVertical: 10 }}
          />
          <Title title="Recommended for You" actionText="See All" />

          <FlashList
            data={products}
            numColumns={numColumns}
            renderItem={({ item }) => <Product {...item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerClassName=" "
            ListFooterComponent={() => (
              <Button className="mx-auto rounded-lg bg-green-400">
                <ButtonText className="font-bold" size="lg">
                  Explore More
                </ButtonText>
                <ButtonIcon as={MoveUpRight} className="ml-2" />
              </Button>
            )}
          />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
