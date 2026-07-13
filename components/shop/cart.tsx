import { ShoppingCart } from "lucide-react-native";

import { Badge, BadgeText } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { Pressable } from "@/components/ui/pressable";

const Cart = () => {
  const totalItems = 1;
  return (
    <Box className="items-center">
      <VStack>
        <Badge
          className={`z-10 self-end ${totalItems > 9 ? "h-6.5 w-7`" : "h-5.5 w-5.5"}  bg-red-600 rounded-full -mb-3.5 -mr-3.5"
          variant="default`}
        >
          <BadgeText className="text-white">{totalItems}</BadgeText>
        </Badge>
        <Pressable className="mr-3">
          <Icon as={ShoppingCart} size="xl" />
        </Pressable>
      </VStack>
    </Box>
  );
};

export default Cart;
