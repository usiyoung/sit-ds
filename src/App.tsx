import styled from 'styled-components';

import { Button, Checkbox, Dropdown, FormTextField, Icon, Select, Text, TextField } from 'sit-ui';
import { PLACEMENT } from 'sit-ui/ui/Dropdown';

import { colors, typography, type Typography } from 'sit-ui/tokens';


function App() {
    return (
        <Container>
            <Text typography={'title2'} color={'purple1'}>
                SIT Design System
            </Text>
            <br /> <br />

            <TextFieldComponent />

            <SelectComponent />

            <FormTextFieldComponent />

            <DropdownComponent />

            <CheckboxComponent />

            <ButtonComponent />

            <TextComponent />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    padding: 30px 16px 20px 16px;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 500px) {
        padding: 16px;
    }
`;


const Wrapper = styled.div`
    display: flex;

    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    margin-bottom: 40px;

    > div:nth-child(2) {
        flex: 0.7
    }

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: start;
    }
`;

const Label = ({ title }: { title: string }) => {
    return (
        <Text typography={'caption1'} color={'gray2'} style={{ flex: 0.3 }}>
            {title}
            <Responsive>Component</Responsive>
        </Text>
    );
};

const Responsive = styled.p`
    @media (max-width: 500px) {
        display: inline-block;
    }
`;

const TextComponent = () => {
    const textStyles: Partial<Typography>[] = ['title1', 'title2', 'body1', 'body2', 'caption2', 'caption2B'];

    return (
        <Wrapper>
            <Label title={'Text'} />
            <div>
                {textStyles.map(typo => (
                    <Text style={{ marginRight: '3px' }} typography={typo} color={'gray1'} key={typo}>{typo}</Text>))}
            </div>
        </Wrapper>

    );
};
const TextFieldComponent = () => {
    return (
        <Wrapper>
            <Label title={'TextField'} />
            <TextField type={'password'} placeholder={'Password'} />
        </Wrapper>
    );
};

const SelectComponent = () => {
    const options = [
        {
            label: 'manager',
            options: [{ value: 'Jack' }, { value: 'Lucky' }, { value: 'Tom' }],
        },
        {
            label: 'engineer',
            options: [{ value: 'Han' }, { value: 'Yong' }, { value: 'Azy' }],
        },
    ];

    return (
        <Wrapper>
            <Label title={'Select'} />
            <Select options={options} onChange={(value: string) => console.log(value)} />
        </Wrapper>
    );
};

const FormTextFieldComponent = () => {
    return (
        <Wrapper>
            <Label title={'FormTextField'} />
            <FormTextField
                style={{ width: '100%' }}
                label={(
                    <p>
                        Label <span>Placement</span>
                    </p>
                )}
                action={
                    (<Button
                        size={'xs'}
                        variant={'text'}
                        icon={<Icon name={'addMini'} style={{ color: 'transparent' }} />}
                    >
                        Action Button
                    </Button>)
                }
                helpText={'Error: Address should start with "0x"'}
                helpTextColor={colors.base.red}
            >
                <TextField placeholder={'Placeholder'} />
            </FormTextField>
        </Wrapper>
    );
};

const CheckboxComponent = () => {
    return (
        <Wrapper>
            <Label title={'Checkbox'} />
            <div>
                <Checkbox
                    checked={true}
                    disabled={false}
                    onChange={() => console.log('checked!')}
                >
        <span
            style={{
                marginLeft: '3px',
                color: colors.gray[200],
                cursor: 'pointer',
                ...typography.caption2,
            }}
        >
        I understand the risks of exposing the private key.
        </span>
                </Checkbox>
            </div>
        </Wrapper>

    );
};

const ButtonComponent = () => {
    return (
        <Wrapper>
            <Label title={'Button'} />
            <div>
                <Button>Click</Button>
            </div>
        </Wrapper>

    );
};

const DropdownComponent = () => {
    const items = [
        { label: '1st menu item', key: '0' },
        { label: '2st menu item', key: '1' },
        { label: '3st menu item', key: '2' },
    ];
    return (
        <Wrapper>
            <Label title={'Dropdown'} />
            <div>
                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    {Object.values(PLACEMENT).map((placement) => (
                        <Dropdown placement={placement} menu={{ items, onClick: () => console.log('clicked!') }}>
                            <Button variant={'outlined'} style={{ width: '140px' }} size={'sm'}>Click {placement}</Button>
                        </Dropdown>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default App;
