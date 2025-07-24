import { Event } from "@/app/types";
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  HoverCard,
  Inset,
  Strong,
  Text,
} from "@radix-ui/themes";
import { LuMapPin } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";

interface props {
  event: Event;
}

const EventCard = ({ event }: props) => {
  const TicketStatus = () => {
    if (event.ticketStatus == 1) return <Badge color="gray">暂未开票</Badge>;
    if (event.ticketStatus == 2) return <Badge color="orange">即将开票</Badge>;
    if (event.ticketStatus == 3) return <Badge color="red">售票结束</Badge>;
    if (event.ticketStatus == 4) return <Badge color="green">正在售票</Badge>;
  };

  const TimeLeft = () => {
    if (event.timeLeft == null)
      return (
        <>
          <Text>开展倒计时</Text>
          <Strong>
            <Text size="8" color="gray">
              --
            </Text>
          </Strong>
        </>
      );
    if (event.timeLeft < 0)
      return (
        <>
          <Text>开展倒计时</Text>
          <Strong>
            <Flex align="center" gap="1">
              <Text size="9" color="gray">
                {Math.abs(event.timeLeft)}
              </Text>
              <Text>天</Text>
            </Flex>
          </Strong>
        </>
      );
    return (
      <Strong>
        <Text size="7" color="gray">
          开展中
        </Text>
      </Strong>
    );
  };

  const EventTime = () => {
    if (!event.enterTime)
      return (
        <Flex className="items-center" gap="2">
          <MdAccessTime />
          待定
        </Flex>
      );

    return (
      <Flex className="items-center" gap="2">
        <MdAccessTime />
        {new Date(event.enterTime).toISOString().slice(0, 10)} ~{" "}
        {new Date(event.endTime).toISOString().slice(0, 10)}
      </Flex>
    );
  };

  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Card
          className=" shadow-xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer h-[200px]"
          onClick={() =>
            window.open("https://cp.allcpp.cn/ticket/detail?event=" + event.id)
          }
        >
          <div className="grid grid-cols-[3fr_4fr_2fr] gap-3 w-auto">
            <Inset clip="padding-box" side="left">
              <img
                src={"//imagecdn3.allcpp.cn/upload" + event.appLogoPicUrl}
                className="w-[400px] h-[200px] object-cover"
              />
            </Inset>
            <Flex direction="column" px="5" py="3" gap="4">
              <Flex justify="between" align="center" width="100%">
                <Heading size="5">
                  <Box>
                    {event.type} · {event.name}
                  </Box>
                </Heading>

                <TicketStatus />
              </Flex>
              <Flex direction="column">
                <EventTime />
                <Flex className="items-center" gap="2">
                  <LuMapPin />
                  {event.provName}
                  {event.areaName} | {event.enterAddress}
                </Flex>
              </Flex>
              <Flex className="text-xs text-gray-400">
                # {event.tag.split("|").map((i) => i + " ")}
              </Flex>
            </Flex>
            <Inset clip="padding-box" side="right" className="bg-gray-50">
              <Flex
                direction="column"
                align="center"
                justify="center"
                className="h-full"
              >
                <TimeLeft />
              </Flex>
            </Inset>
          </div>
        </Card>
      </HoverCard.Trigger>
      <HoverCard.Content maxWidth="300px" side="right">
        <Flex direction="column">
          <Box>活动id {event.id}</Box>
          <Flex gap="3">
            <Box>{event.wannaGoCount} 想去</Box>|
            <Box>{event.circleCount} 社团</Box>|
            <Box>{event.doujinshiCount} 展品</Box>
          </Flex>
          <Button>抢票</Button>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>
  );
};

export default EventCard;
