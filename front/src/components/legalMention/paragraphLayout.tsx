import React from 'react';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import ContactButton from '@/components/layout/Button/contactButton';
import InformationButton from '@/components/contact/informationButton';

export default function ParagraphLayout({
    index,
    notice,
}: {
    index: number;
    notice: any; // eslint-disable-line
}): React.JSX.Element {
    return (
        <Flex>
            {notice ? (
                <Flex direction="column" margin="1%" gap={6}>
                    <Heading color="brand.500" size={"lg"}>
                        {index + 1}. {notice.title}
                    </Heading>
                    <Stack direction="column" spacing="5">
                        {notice.content
                            ? Object.keys(notice.content).map((title) => (
                                  <Flex>
                                      {!title.includes('button') ? (
                                          <Text
                                              as="b"
                                              color="gray.500"
                                              fontSize={{ base: 'sm', xl: 'lg' }}
                                          >
                                              {title !== 'description' ? (
                                                  <Text color="brand.600" as="b">
                                                      {title}:{' '}
                                                  </Text>
                                              ) : null}{' '}
                                              {notice.content[title]}
                                          </Text>
                                      ) : (
                                          <Flex>
                                              {notice.content[title] === 'ContactButton' ? (
                                                  <ContactButton props={{ fontSize: '20px' }} />
                                              ) : (
                                                  <Flex alignItems="center">
                                                      <Text
                                                          as="b"
                                                          color="brand.600"
                                                          fontSize={{ base: 'md', xl: 'xl' }}
                                                      >
                                                          {notice.content[title].text}:
                                                      </Text>
                                                      <InformationButton
                                                          text={notice.content[title].text}
                                                          content={notice.content[title].content}
                                                      />
                                                  </Flex>
                                              )}
                                          </Flex>
                                      )}
                                  </Flex>
                              ))
                            : null}
                    </Stack>
                </Flex>
            ) : null}
        </Flex>
    );
}
