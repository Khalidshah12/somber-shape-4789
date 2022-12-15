import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import AddressSub from './AddressSub';

const Address = () => {
    return (
        <>
            <Tabs width="80%" margin="auto" variant='soft-rounded' isFitted colorScheme='green' align='center'>
                <TabList w={"50%"}>
                    <Tab>1</Tab>
                    <Tab>2</Tab>
                    <Tab>3</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <AddressSub/>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </>
    );
};

export default Address;