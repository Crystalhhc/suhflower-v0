'use client'
//import './styles.css';
import * as React from 'react';
import { 
  Container, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Box,
  DropdownMenu,
  Checkbox,
  Separator,
  Tabs,
  Card,
  IconButton

} from '@radix-ui/themes';
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import { 
  DashboardIcon,
  StarFilledIcon,
  TimerIcon,
  DotIcon,
  DotsHorizontalIcon,
  MixIcon,
  ArchiveIcon,
  TrashIcon,
  GearIcon,
  HamburgerMenuIcon,
  ExitIcon,
  Pencil2Icon,
  ChevronRightIcon,
  ChevronDownIcon
  
 } from '@radix-ui/react-icons';

import {
  LibraryIcon,
  LayoutTemplateIcon,
  UsersIcon
} from 'lucide-react';


export default function SidebarRight() {
  return (
 <Flex> 
    <IconButton variant="ghost" size="2">
      <ChevronRightIcon />
    </IconButton>
  <Flex
    direction="column"
    style={{
      zIndex: 9999,
      overflow: 'hidden',
      width: 280,
      maxHeight: 'calc(100vh - var(--space-4) - var(--space-4))',
      borderRadius: 'var(--radius-4)',
      backgroundColor: 'var(--color-panel-solid)',
      transformOrigin: 'top center',
      transitionProperty: 'transform, box-shadow',
      transitionDuration: '200ms',
      boxShadow: 'var(--shadow-5)'

    }}
  >
        <Tabs.Root defaultValue="data">
          <Tabs.List>
            <Tabs.Trigger value="settings"><Text size="1">Settings</Text></Tabs.Trigger>
            <Tabs.Trigger value="style"><Text size="1">Style</Text></Tabs.Trigger>
            <Tabs.Trigger value="data"><Text size="1">Data</Text></Tabs.Trigger>
            <Tabs.Trigger value="states"><Text size="1">States</Text></Tabs.Trigger>
          </Tabs.List>

          <Box px="1" pt="3" pb="2">
            <Tabs.Content value="settings">
              <Text size="1">Setting</Text>
            </Tabs.Content>

            <Tabs.Content value="style">
            
              <Text size="1">Style</Text>
            
            </Tabs.Content>

            <Tabs.Content value="data" style={{ 
              background: 'var(--background)',
              flex: 'grow'
              
              }}>
        
                  <Text size="1">Data</Text>

                  <Accordion.Root style={{ background: 'var(--background)' }} className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                    <Accordion.Item className="AccordionItem" value="item-1">
                      <AccordionTrigger className="AccordionTrigger">
                        
                        <Flex gap="8" align="center">
                          <Text size="1">Data Source</Text>
                          <ChevronDownIcon className="AccordionChevron" aria-hidden />
                        </Flex>
                        
                        </AccordionTrigger>
                      <AccordionContent>
                        <Text size="1"></Text>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-2">
                      <AccordionTrigger className="AccordionTrigger">
                      <Flex gap="8" align="center">
                          <Text size="1">Schema</Text>
                          <ChevronDownIcon className="AccordionChevron" aria-hidden />
                        </Flex>
                        </AccordionTrigger>
                      <AccordionContent>
                        Yes. It's unstyled by default, giving you freedom over the look and feel.
                      </AccordionContent>
                    </Accordion.Item>
                  </Accordion.Root>  
             
             
            </Tabs.Content>

            <Tabs.Content value="states">
              <Text size="1">States</Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
       </Flex>         
    </Flex>
  )
}