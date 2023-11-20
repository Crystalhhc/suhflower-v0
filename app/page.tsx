'use client';
import Image from 'next/image'
import { 
  Container, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Card, 
  Badge, 
  Em, 
  Strong, 
  Grid,
  Box,
  Blockquote,
  AlertDialog,
  AspectRatio,
  Callout,
  Checkbox,
  ContextMenu,
  DropdownMenu,
  Switch,
  Avatar
} from '@radix-ui/themes';
import * as Menubar from '@radix-ui/react-menubar';
import { 
  ArrowRightIcon, 
  ChatBubbleIcon, 
  InfoCircledIcon, 
  CaretDownIcon, 
  HamburgerMenuIcon, 
  GearIcon, 
  DotsHorizontalIcon,
  EyeOpenIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
  DesktopIcon,
  PlusIcon,
  Share2Icon,
  DashboardIcon
 } from '@radix-ui/react-icons';

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SidebarRight from '../components/SidebarRight';
import ContentBody from '../components/MainContent';
import MainContent from '../components/MainContent';
import DocTree from '../components/DocTree/DocTree';

export default function Home() {
  return (
   
<Flex grow="1" justify="center">
  <Container grow="1" mt="1"
        style={{
          zIndex: 9999,
          //overflow: 'hidden',
          width: 1440,
          //maxHeight: 'calc(100vh - var(--space-4) - var(--space-4))',
          borderRadius: 'var(--radius-4)',
          backgroundColor: 'var(---color-background)',
          transformOrigin: 'top center',
          transitionProperty: 'transform, box-shadow',
          transitionDuration: '200ms',
          boxShadow: 'var(--shadow-5)' 
        }}
  >
    <Flex direction="row" gap="0">
      <Sidebar />
      <Flex direction="column" gap="1">
        <Topbar /> 
    
        <Flex direction="row" gap="1">
          <MainContent />
          <SidebarRight /> 
        </Flex>  
      
      </Flex>  

    </Flex>
  </Container>
</Flex>
 
  )
}
