"use client";
import { useUser, SelectBuyers } from "@/app/components";
import { Callout, Flex, Link, Strong } from "@radix-ui/themes";
import { GoInfo } from "react-icons/go";

export default function Home() {
  const { isLoggedIn } = useUser();

  return (
    <Flex gap="3" direction="column">
      <Callout.Root variant="soft" color="blue">
        <Callout.Icon>
          <GoInfo />
        </Callout.Icon>
        <Callout.Text>
          请提前添加好购票人，可以点击
          <Link href="https://cp.allcpp.cn/ticket/prePurchaser" target="_blank">
            <Strong>这里</Strong>
          </Link>
          添加
        </Callout.Text>
      </Callout.Root>
      {isLoggedIn && <SelectBuyers />}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        porttitor vel orci ut tristique. In venenatis condimentum molestie.
        Suspendisse mollis lacinia arcu, ac finibus metus. Fusce iaculis risus
        ultrices augue facilisis, a porttitor ligula pretium. Sed iaculis orci
        ligula, tristique maximus leo volutpat pharetra. Pellentesque nisl diam,
        vehicula vel risus id, egestas laoreet libero. Nulla tortor mauris,
        fringilla vitae ex nec, fringilla aliquam ligula. Aenean non augue vel
        sapien imperdiet consequat vel vitae felis. Sed risus dolor, tincidunt
        at risus in, gravida vulputate massa. Nullam eget magna felis. Integer
        posuere, odio ac varius pretium, lacus dui vehicula lectus, quis
        vestibulum dui nibh non leo. Sed enim sapien, auctor quis quam nec,
        laoreet semper nisl. Aliquam in tempor nisl, vel lacinia orci. Sed
        accumsan imperdiet sagittis.
      </p>

      <p>
        Vivamus euismod tellus at leo congue, vitae blandit tellus auctor.
        Vivamus non leo vitae quam dictum tincidunt sit amet sit amet nulla.
        Fusce auctor tortor id suscipit sagittis. Sed at dui ac nibh efficitur
        ultricies a vitae nibh. Vestibulum mattis ante id turpis feugiat, vel
        pellentesque velit pretium. Fusce efficitur id tellus vel malesuada.
        Etiam pulvinar, tortor a tristique consequat, lacus mi interdum mi, id
        cursus lectus massa vel sapien. Nullam tristique vitae tellus viverra
        congue. Nam vitae sem odio. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Etiam egestas,
        lorem vel pretium suscipit, libero ex tempor diam, molestie consectetur
        nibh purus ut arcu. Vestibulum at odio a neque auctor posuere id vel
        eros. Praesent pulvinar lobortis ligula, congue congue elit. Integer
        luctus fermentum lectus nec pulvinar. Fusce iaculis neque non sapien
        consectetur maximus. Fusce sed efficitur arcu.
      </p>

      <p>
        In hac habitasse platea dictumst. Proin sit amet convallis diam, vel
        feugiat urna. Curabitur posuere leo sit amet dapibus efficitur. Morbi
        vestibulum placerat dui vel mattis. Fusce mollis, ipsum ac gravida
        imperdiet, neque nulla ullamcorper mauris, non finibus magna eros nec
        erat. Integer commodo mattis turpis, sit amet semper massa. Duis sit
        amet erat bibendum, tincidunt leo quis, tincidunt felis. Ut mollis
        ullamcorper velit, consectetur bibendum augue aliquet sit amet. Nulla
        interdum elementum ornare. Fusce tempor rutrum ex sed ultrices. Nulla
        facilisi. Quisque consectetur urna semper tellus pulvinar, sit amet
        placerat lorem accumsan.
      </p>

      <p>
        Nulla imperdiet imperdiet tincidunt. Mauris tincidunt rutrum facilisis.
        Quisque hendrerit vitae tortor eu tempus. Proin sapien lacus, tristique
        sed orci et, ullamcorper consectetur augue. Praesent in nisi sed nulla
        tincidunt pharetra ac sed neque. Sed vel tristique elit. Pellentesque
        porta est sapien, vitae placerat enim rutrum quis. Fusce finibus eros
        vel mauris ornare pulvinar. Quisque augue nibh, cursus in vestibulum
        varius, sollicitudin in purus. Proin congue, ipsum pretium elementum
        imperdiet, tellus libero vestibulum enim, quis lacinia erat eros
        elementum odio. Nullam at pharetra massa. Curabitur tempus lectus non
        metus viverra condimentum. Morbi eget diam tincidunt, rhoncus enim quis,
        semper quam. Aliquam erat volutpat. Vestibulum aliquam tortor sit amet
        neque feugiat consectetur.
      </p>

      <p>
        Donec ornare vitae arcu quis dapibus. Praesent interdum dictum laoreet.
        Phasellus blandit ipsum leo, nec mattis nulla dictum vitae. Sed accumsan
        lorem ut posuere cursus. Ut sed pretium leo. Aliquam dignissim semper
        est laoreet porttitor. Proin consequat nibh eget sem malesuada interdum.
        Cras ullamcorper libero eu lectus ultricies mollis. Vestibulum tincidunt
        venenatis dolor non viverra. Nunc at euismod nunc, ac venenatis tortor.
        Pellentesque consectetur feugiat dignissim.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        porttitor vel orci ut tristique. In venenatis condimentum molestie.
        Suspendisse mollis lacinia arcu, ac finibus metus. Fusce iaculis risus
        ultrices augue facilisis, a porttitor ligula pretium. Sed iaculis orci
        ligula, tristique maximus leo volutpat pharetra. Pellentesque nisl diam,
        vehicula vel risus id, egestas laoreet libero. Nulla tortor mauris,
        fringilla vitae ex nec, fringilla aliquam ligula. Aenean non augue vel
        sapien imperdiet consequat vel vitae felis. Sed risus dolor, tincidunt
        at risus in, gravida vulputate massa. Nullam eget magna felis. Integer
        posuere, odio ac varius pretium, lacus dui vehicula lectus, quis
        vestibulum dui nibh non leo. Sed enim sapien, auctor quis quam nec,
        laoreet semper nisl. Aliquam in tempor nisl, vel lacinia orci. Sed
        accumsan imperdiet sagittis.
      </p>

      <p>
        Vivamus euismod tellus at leo congue, vitae blandit tellus auctor.
        Vivamus non leo vitae quam dictum tincidunt sit amet sit amet nulla.
        Fusce auctor tortor id suscipit sagittis. Sed at dui ac nibh efficitur
        ultricies a vitae nibh. Vestibulum mattis ante id turpis feugiat, vel
        pellentesque velit pretium. Fusce efficitur id tellus vel malesuada.
        Etiam pulvinar, tortor a tristique consequat, lacus mi interdum mi, id
        cursus lectus massa vel sapien. Nullam tristique vitae tellus viverra
        congue. Nam vitae sem odio. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Etiam egestas,
        lorem vel pretium suscipit, libero ex tempor diam, molestie consectetur
        nibh purus ut arcu. Vestibulum at odio a neque auctor posuere id vel
        eros. Praesent pulvinar lobortis ligula, congue congue elit. Integer
        luctus fermentum lectus nec pulvinar. Fusce iaculis neque non sapien
        consectetur maximus. Fusce sed efficitur arcu.
      </p>

      <p>
        In hac habitasse platea dictumst. Proin sit amet convallis diam, vel
        feugiat urna. Curabitur posuere leo sit amet dapibus efficitur. Morbi
        vestibulum placerat dui vel mattis. Fusce mollis, ipsum ac gravida
        imperdiet, neque nulla ullamcorper mauris, non finibus magna eros nec
        erat. Integer commodo mattis turpis, sit amet semper massa. Duis sit
        amet erat bibendum, tincidunt leo quis, tincidunt felis. Ut mollis
        ullamcorper velit, consectetur bibendum augue aliquet sit amet. Nulla
        interdum elementum ornare. Fusce tempor rutrum ex sed ultrices. Nulla
        facilisi. Quisque consectetur urna semper tellus pulvinar, sit amet
        placerat lorem accumsan.
      </p>

      <p>
        Nulla imperdiet imperdiet tincidunt. Mauris tincidunt rutrum facilisis.
        Quisque hendrerit vitae tortor eu tempus. Proin sapien lacus, tristique
        sed orci et, ullamcorper consectetur augue. Praesent in nisi sed nulla
        tincidunt pharetra ac sed neque. Sed vel tristique elit. Pellentesque
        porta est sapien, vitae placerat enim rutrum quis. Fusce finibus eros
        vel mauris ornare pulvinar. Quisque augue nibh, cursus in vestibulum
        varius, sollicitudin in purus. Proin congue, ipsum pretium elementum
        imperdiet, tellus libero vestibulum enim, quis lacinia erat eros
        elementum odio. Nullam at pharetra massa. Curabitur tempus lectus non
        metus viverra condimentum. Morbi eget diam tincidunt, rhoncus enim quis,
        semper quam. Aliquam erat volutpat. Vestibulum aliquam tortor sit amet
        neque feugiat consectetur.
      </p>

      <p>
        Donec ornare vitae arcu quis dapibus. Praesent interdum dictum laoreet.
        Phasellus blandit ipsum leo, nec mattis nulla dictum vitae. Sed accumsan
        lorem ut posuere cursus. Ut sed pretium leo. Aliquam dignissim semper
        est laoreet porttitor. Proin consequat nibh eget sem malesuada interdum.
        Cras ullamcorper libero eu lectus ultricies mollis. Vestibulum tincidunt
        venenatis dolor non viverra. Nunc at euismod nunc, ac venenatis tortor.
        Pellentesque consectetur feugiat dignissim.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        porttitor vel orci ut tristique. In venenatis condimentum molestie.
        Suspendisse mollis lacinia arcu, ac finibus metus. Fusce iaculis risus
        ultrices augue facilisis, a porttitor ligula pretium. Sed iaculis orci
        ligula, tristique maximus leo volutpat pharetra. Pellentesque nisl diam,
        vehicula vel risus id, egestas laoreet libero. Nulla tortor mauris,
        fringilla vitae ex nec, fringilla aliquam ligula. Aenean non augue vel
        sapien imperdiet consequat vel vitae felis. Sed risus dolor, tincidunt
        at risus in, gravida vulputate massa. Nullam eget magna felis. Integer
        posuere, odio ac varius pretium, lacus dui vehicula lectus, quis
        vestibulum dui nibh non leo. Sed enim sapien, auctor quis quam nec,
        laoreet semper nisl. Aliquam in tempor nisl, vel lacinia orci. Sed
        accumsan imperdiet sagittis.
      </p>

      <p>
        Vivamus euismod tellus at leo congue, vitae blandit tellus auctor.
        Vivamus non leo vitae quam dictum tincidunt sit amet sit amet nulla.
        Fusce auctor tortor id suscipit sagittis. Sed at dui ac nibh efficitur
        ultricies a vitae nibh. Vestibulum mattis ante id turpis feugiat, vel
        pellentesque velit pretium. Fusce efficitur id tellus vel malesuada.
        Etiam pulvinar, tortor a tristique consequat, lacus mi interdum mi, id
        cursus lectus massa vel sapien. Nullam tristique vitae tellus viverra
        congue. Nam vitae sem odio. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Etiam egestas,
        lorem vel pretium suscipit, libero ex tempor diam, molestie consectetur
        nibh purus ut arcu. Vestibulum at odio a neque auctor posuere id vel
        eros. Praesent pulvinar lobortis ligula, congue congue elit. Integer
        luctus fermentum lectus nec pulvinar. Fusce iaculis neque non sapien
        consectetur maximus. Fusce sed efficitur arcu.
      </p>

      <p>
        In hac habitasse platea dictumst. Proin sit amet convallis diam, vel
        feugiat urna. Curabitur posuere leo sit amet dapibus efficitur. Morbi
        vestibulum placerat dui vel mattis. Fusce mollis, ipsum ac gravida
        imperdiet, neque nulla ullamcorper mauris, non finibus magna eros nec
        erat. Integer commodo mattis turpis, sit amet semper massa. Duis sit
        amet erat bibendum, tincidunt leo quis, tincidunt felis. Ut mollis
        ullamcorper velit, consectetur bibendum augue aliquet sit amet. Nulla
        interdum elementum ornare. Fusce tempor rutrum ex sed ultrices. Nulla
        facilisi. Quisque consectetur urna semper tellus pulvinar, sit amet
        placerat lorem accumsan.
      </p>

      <p>
        Nulla imperdiet imperdiet tincidunt. Mauris tincidunt rutrum facilisis.
        Quisque hendrerit vitae tortor eu tempus. Proin sapien lacus, tristique
        sed orci et, ullamcorper consectetur augue. Praesent in nisi sed nulla
        tincidunt pharetra ac sed neque. Sed vel tristique elit. Pellentesque
        porta est sapien, vitae placerat enim rutrum quis. Fusce finibus eros
        vel mauris ornare pulvinar. Quisque augue nibh, cursus in vestibulum
        varius, sollicitudin in purus. Proin congue, ipsum pretium elementum
        imperdiet, tellus libero vestibulum enim, quis lacinia erat eros
        elementum odio. Nullam at pharetra massa. Curabitur tempus lectus non
        metus viverra condimentum. Morbi eget diam tincidunt, rhoncus enim quis,
        semper quam. Aliquam erat volutpat. Vestibulum aliquam tortor sit amet
        neque feugiat consectetur.
      </p>

      <p>
        Donec ornare vitae arcu quis dapibus. Praesent interdum dictum laoreet.
        Phasellus blandit ipsum leo, nec mattis nulla dictum vitae. Sed accumsan
        lorem ut posuere cursus. Ut sed pretium leo. Aliquam dignissim semper
        est laoreet porttitor. Proin consequat nibh eget sem malesuada interdum.
        Cras ullamcorper libero eu lectus ultricies mollis. Vestibulum tincidunt
        venenatis dolor non viverra. Nunc at euismod nunc, ac venenatis tortor.
        Pellentesque consectetur feugiat dignissim.
      </p>
    </Flex>
  );
}
