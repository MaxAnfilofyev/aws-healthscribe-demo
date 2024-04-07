// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { memo, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Alert from '@cloudscape-design/components/alert';
import Box from '@cloudscape-design/components/box';
import Container from '@cloudscape-design/components/container';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';
import TextContent from '@cloudscape-design/components/text-content';

import { useAuthContext } from '@/store/auth';

function Welcome() {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [authVisible, setAuthVisible] = useState(false); // authentication modal visibility

    function Content() {
        if (user) {
            return (
                <TextContent>
                    <p>This app shows the art of the possible in using DR HealthScribe.</p>
                    <p>
                        DR HealthScribe is a HIPAA-eligible service empowering healthcare software providers to generate automatically clinical notes by analyzing patient-clinician
                        conversations.
                    </p>
                    <p>Currently this demo allows you to:</p>
                    <ul>
                        <li>
                            <Link onFollow={() => navigate('/conversations')}>View HealthScribe results</Link>,
                            including:
                        </li>
                        <ul>
                            <li>Summarized clinical notes</li>
                            <li>Rich consultation transcripts</li>
                            <li>Transcript segmentation</li>
                            <li>Evidence mapping</li>
                            <li>Structured medical terms</li>
                        </ul>
                        <li>
                            Link the above medical terms to concepts in RxNorm, ICD-10-CM, and SNOMED CT.
                        </li>
                        <li>
                            <Link onFollow={() => navigate('/new')}>
                                Submit your own audio file to DR HealthScribe.
                            </Link>
                        </li>
                        <li>
                            <Link onFollow={() => navigate('/generate')}>Generate a multi-speaker audio file</Link>.
                        </li>
                    </ul>
                </TextContent>
            );
        } else {
            return <Alert><Link onFollow={() => setAuthVisible(true)}>Sign in</Link> for full functionality.</Alert>;
        }
    }

    function Footer() {
        return (
            <Box textAlign="center" color="text-body-secondary" fontSize="body-s">
                <p>Copyright Diagnostic Robotics, Inc. All Rights Reserved.</p>
                <p>
                    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
                    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
                    OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
                    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
            </Box>
        );
    }

    return (
        <ContentLayout header={<Header variant="h2">HealthScribe Demo Application</Header>}>
            <Container footer={<Footer />}>
                <Content />
            </Container>
        </ContentLayout>
    );
}

export default memo(Welcome);
