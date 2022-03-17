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
    ],
    buttonText: 'Access Terminal',
    buttonTextColor: '#fff',
    buttonDisabled: false,
    buttonDisabledColor: 'gray',
    buttonActiveColor: 'pink'
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
    buttonText: 'Coming Soon',
    buttonTextColor: '#fff',
    buttonDisabled: true,
    buttonDisabledColor: 'gray',
    buttonActiveColor: 'pink'
  },
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
    ],
    buttonText: 'Coming Soon',
    buttonTextColor: '#fff',
    buttonDisabled: true,
    buttonDisabledColor: 'gray',
    buttonActiveColor: 'pink'
  },
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
    ],
    buttonText: 'Coming Soon',
    buttonTextColor: '#fff',
    buttonDisabled: true,
    buttonDisabledColor: 'gray',
    buttonActiveColor: 'pink'
  }
]

const CustomCarousel = ({ styles }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      itemClass={'item-card'}
      responsive={responsive}
    >
      {items.map(item => {
        return (
          <Box boxShadow='xl' rounded='md' bg='white' m={4}>
            {/* <Image src={image} alt='Dan Abramov' /> */}
            <HStack mt={'1'} spacing='24px'>
              <VStack pl='5' pb={'5'} pr={'5'} alignItems={'flex-start'}>
                <VStack alignItems={'flex-start'}>
                  <Text fontSize='xl' fontWeight={'bold'} m={0} p={0}>
                    {item.title}
                  </Text>
                  <Text color='gray.500' isTruncated  style={{marginTop:'0px'}}>
                    {item.description}
                  </Text>
                  {item.sections.map((section) => {
                    let IconEl = section.icon
                    return (
                      <HStack spacing='10px' >
                        <IconEl color={'#70458f'} />
                        <Text fontSize={13}>
                          {section.text}
                        </Text>
                      </HStack>
                    )
                  })}
                </VStack>
                <VStack>
                  <Button mt={'5'} color={'#fff'}
                    disabled={item.buttonDisabled}
                    // backgroundColor={item.buttonActiveColor}
                    colorScheme={item.buttonActiveColor}
                    variant='solid'
                  >
                    {item.buttonText || 'Access Terminal'}
                  </Button>
                </VStack>

              </VStack>
              {item.image && <VStack className="image-width">
                <Image
                  // boxSize={'300px'}
                  
                  src={item.image} />
              </VStack>}
            </HStack>

          </Box>

        );
      })}
    </Carousel>
  );
};

export default CustomCarousel;
