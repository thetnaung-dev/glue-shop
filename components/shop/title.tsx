import React from "react";

import { Pressable } from "@/components/ui/pressable";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";

type TitleProps = {
  title: string;
  actionText: string;
};
const Title = ({ title, actionText }: TitleProps) => {
  return (
    <HStack className="items-center justify-between">
      <Text size="lg" className="font-medium text-black">
        {title}
      </Text>
      <Pressable>
        <Text>{actionText}</Text>
      </Pressable>
    </HStack>
  );
};

export default Title;
