import { Image } from "expo-image";
import { useRouter } from "expo-router";

import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ProductType } from "@/types";
import { FavouriteIcon, Icon, StarIcon } from "../ui/icon";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
interface ProductProps extends ProductType {
  itemwidth: number;
}

const Product = ({
  id,
  brand,
  title,
  star,
  quantity,
  price,
  discount,
  image,
  users,
}: ProductType) => {
  const route = useRouter();
  return (
    <Pressable className="mx-2" onPress={() => route.navigate("/detail")}>
      <Card className="gap-2 border-0 bg-transparent px-0">
        <Image
          style={{ width: "100%", aspectRatio: 3 / 4, borderRadius: 7 }}
          source={image}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Pressable className="absolute top-6 right-2 rounded-full bg-zinc-200">
          <Icon
            as={FavouriteIcon}
            className={`m-3 h-5 w-5 ${users.length > 0 && "fill-red-400"} text-red-400`}
          />
        </Pressable>
        <VStack space="xs" className="mt-1">
          <HStack space="sm" className="items-center">
            <Text className="font-semibold text-gray-500">{brand}</Text>
            <Icon as={StarIcon} size="xs" className="text-orange-500" />
            <Text size="sm">{star}</Text>
            <Text size="xs" className="text-gray-500">
              ({quantity})
            </Text>
          </HStack>
          <Text className="line-clamp-1">{title}</Text>
          <HStack>
            <Text size="sm" className="mr-2 font-medium text-green-700">
              ${price.toFixed(2)}
            </Text>
            {discount > 0 && (
              <Text size="sm" className="line-through">
                {discount.toFixed(2)}
              </Text>
            )}
          </HStack>
        </VStack>
      </Card>
    </Pressable>
  );
};

export default Product;
