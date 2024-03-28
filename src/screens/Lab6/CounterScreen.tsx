import React from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FONTFAMILY } from '../../../assets/fonts';
import COLORS from '../../assets/colors/Colors';
import { ButtonComponent, ContainerComponent, RowComponent, SectionComponent, TextComponent } from '../../components';
import { decrementCounter, incrementCounter, multiply, resetCounter } from '../../store/counterSlice';
import { RootState } from '../../store/store';

const CounterScreen = () => {
    const counterValue = useSelector((state: RootState) => state.Counter.counter);// Sử dụng RootState từ store.ts
    const dispatch = useDispatch();

    const handleMultiply = () => {
        dispatch(multiply(2));
    };

    const handleIncrement = () => {
        dispatch(incrementCounter()); // dispatch không cần truyền tham số vào incrementCounter
    };

    const handleDecrement = () => {
        dispatch(decrementCounter());
    };

    const handleReset = () => {
        dispatch(resetCounter());
    };

    return (
        <ContainerComponent styles={{ justifyContent: 'center', flex: 1 }}>
            <SectionComponent >
                <TextComponent
                    text={`Counter Value:  ${counterValue}`}
                    size={30}
                    color={COLORS.RED}
                    font={FONTFAMILY.poppins_bold} 
                    styles = {{textAlign: 'center'}}/>
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='space-around'>
                    <ButtonComponent
                        text="Multiply by 2"
                        onPress={handleMultiply}
                        type='orange'
                        styles={{ padding: 10, width: 150 }} />
                    <ButtonComponent
                        text="Increment"
                        onPress={handleIncrement}
                        type='orange'
                        styles={{ padding: 10, width: 150 }} />
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='space-around'>
                    <ButtonComponent
                        text="Decrement"
                        onPress={handleDecrement}
                        type='orange'
                        styles={{ padding: 10, width: 150 }} />
                    <ButtonComponent
                        text="Reset"
                        onPress={handleReset}
                        type='orange'
                        styles={{ padding: 10, width: 150 }} />
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    );
};

export default CounterScreen;
