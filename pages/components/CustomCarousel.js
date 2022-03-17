import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Image, Box, HStack, Text, Button, VStack } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, SunIcon } from '@chakra-ui/icons'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 20
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

let items = [
  {
    type: 'card',
    image: '/graph.png',
    title: 'Risk Terminal',
    description: 'Advanced Insights info DeFi Data',
    sections: [
      {
        icon: PhoneIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: AddIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: WarningIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: SunIcon,
        text: 'Visualized crypto analysis',
      }
    ]
  },
  {
    type: 'card',
    image: null,
    title: 'Risk Terminal',
    description: 'Advanced Insights info DeFi Data',
    sections: [
      {
        icon: PhoneIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: AddIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: WarningIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: SunIcon,
        text: 'Visualized crypto analysis',
      }
    ]
  },
  {
    type: 'card',
    image: null,
    title: 'Risk Terminal',
    description: 'Advanced Insights info DeFi Data',
    sections: [
      {
        icon: PhoneIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: AddIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: WarningIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: SunIcon,
        text: 'Visualized crypto analysis',
      }
    ]
  },
  {
    type: 'card',
    image: null,
    title: 'Risk Terminal',
    description: 'Advanced Insights info DeFi Data',
    sections: [
      {
        icon: PhoneIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: AddIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: WarningIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: SunIcon,
        text: 'Visualized crypto analysis',
      }
    ],
    buttonText: 'Access Terminal'
  },
  {
    type: 'card',
    image: null,
    title: 'Risk Terminal',
    description: 'Advanced Insights info DeFi Data',
    sections: [
      {
        icon: PhoneIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: AddIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: WarningIcon,
        text: 'Visualized crypto analysis',
      },
      {
        icon: SunIcon,
        text: 'Visualized crypto analysis',
      }
    ]
  }
]

const CustomCarousel = ({ styles }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      itemClass={styles.card}
      responsive={responsive}
    >
      {items.slice(0, 5).map(item => {
        return (
          <Box width={'500'} height={'300'} boxShadow='xl' p='5' rounded='md' bg='white' m={4}>
            {/* <Image src={image} alt='Dan Abramov' /> */}
            <HStack mt={'2'} spacing='24px'>
              <VStack alignItems={'flex-start'}>
                <Text fontSize='xl' fontWeight={'bold'}>
                  {item.title}
                </Text>
                <Text mb={'5'} color='gray.500' isTruncated>
                  {item.description}
                </Text>
                {item.sections.map((section) => {
                  let IconEl = section.icon
                  return (
                    <HStack mt={'2'} spacing='24px'>
                      <IconEl color={'#70458f'} />
                      <Text>
                        {section.text}
                      </Text>
                    </HStack>
                  )
                })}
                <Button mt={'5'} colorScheme='pink' variant='solid'>
                  {item.buttonText || 'Access Terminal'}
                </Button>
              </VStack>
             {item.image && <VStack>
                <Image src={item.image} />
              </VStack>}
            </HStack>

          </Box>

        );
      })}
    </Carousel>
  );
};

export default CustomCarousel;
