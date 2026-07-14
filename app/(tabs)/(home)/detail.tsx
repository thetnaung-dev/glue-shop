import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";

import Cart from "@/components/shop/cart";
import ViewPager from "@/components/shop/viewpager";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { HStack } from "@/components/ui/hstack";
import { CheckIcon, FavouriteIcon, Icon, StarIcon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { products } from "@/data";

const Detail = () => {
  const { id } = useLocalSearchParams();
  const [more, setMore] = useState(false);
  const [colors, setColors] = useState(false);
  const [size, setSizes] = useState(false);
  const [values, setValues] = useState(["Illustration"]);
  const product = products.find((p) => p.id === +id);
  return (
    <VStack className="flex-1 bg-white">
      <Stack.Screen
        options={{
          headerTitle: "Product Detail",
          headerBackTitle: "Home",
          headerRight: () => <Cart />,
        }}
      />
      <ViewPager />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack className="mt-2 px-5" space="sm">
          <HStack className="items-center justify-between">
            <HStack space="sm" className="items-center">
              <Text className="font-semibold text-gray-500">
                {product?.brand}
              </Text>
              <Icon as={StarIcon} size="xs" className="text-orange-500" />
              <Text size="sm">{product?.star}</Text>
              <Text size="xs" className="text-gray-500">
                ({product?.quantity})
              </Text>
            </HStack>
            <Pressable className="ml-8 rounded-full">
              <Icon
                as={FavouriteIcon}
                className={`m-3 h-5 w-5 ${product!.users?.length > 0 && "fill-red-400"} text-red-400`}
              />
            </Pressable>
          </HStack>
          <Text className="line-clamp-1 font-medium">{product?.title}</Text>
          <HStack>
            <Text size="sm" className="mr-2 font-medium text-green-700">
              ${product?.price.toFixed(2)}
            </Text>
            {product?.discount! > 0 && (
              <Text size="sm" className="line-through">
                {product?.discount.toFixed(2)}
              </Text>
            )}
          </HStack>
          <VStack>
            <Text className={`${!more && "line-clamp-3"}`}>
              {product?.description}
            </Text>
            <Pressable onPress={() => setMore((p) => !p)}>
              <Text italic>{more ? "See less" : "See more"}</Text>
            </Pressable>
          </VStack>
          <Text className="mt-2 mb-1">Choose Colors</Text>
          <CheckboxGroup
            value={values}
            onChange={(keys) => {
              setValues(keys);
            }}
          >
            <HStack space="2xl">
              <Checkbox value="Illustration">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Illustration</CheckboxLabel>
              </Checkbox>
              <Checkbox value="Animation">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Animation</CheckboxLabel>
              </Checkbox>
              <Checkbox value="Typography">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Typography</CheckboxLabel>
              </Checkbox>
            </HStack>
          </CheckboxGroup>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Detail;
