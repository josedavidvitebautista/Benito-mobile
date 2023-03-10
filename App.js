import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TextInput, ImageBackground, Button, Alert} from 'react-native';
import {useForm, Controller} from "react-hook-form";

export default function App() {
    let restFreCardi = '';
    let restDiabe = '';
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            presionSistolica: '',
            presionDiastolica: '',
            edad: '',
            peso: '',
            altura: '',
            glucosa: '',
            imc: '',
        }
    });
    const refpresionSistolica = useRef();
    const refpresionDiastolica = useRef();
    const refEdad = useRef();
    const refPeso = useRef();
    const refAltura = useRef();
    const refGlucosa = useRef();
    const refIMC = useRef();
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const onSubmit = data => {
        console.log(data);
        if (data.presionSistolica <= 120 && data.presionDiastolica <= 80) {
            restFreCardi = 'Usted tiene la presión normal';
        }
        else if (data.presionSistolica >= 120 && data.presionSistolica <= 139 && data.presionDiastolica >= 80 && data.presionDiastolica <= 89) {
            restFreCardi = 'Usted tiene Hipertensión';
        }
        else if (data.presionSistolica >= 140 && data.presionDiastolica >= 90) {
            restFreCardi = 'Usted tiene la presión alta';
        }

        if(data.glucosa <= 140 && data.imc >= 18.5 && data.imc <= 24.9 && data.edad >= 18 && data.edad <= 65){
            restDiabe = 'Usted no tiene diabetes';
        }
        else if(data.glucosa >= 140 && data.glucosa <= 199 && data.imc >= 25.0 && data.imc <= 29.9 && data.edad >= 18 && data.edad <= 65){
            restDiabe = 'Usted tiene diabetes';
        }
        else if(data.glucosa >= 200 && data.imc >= 18.5 && data.imc <= 24.9 && data.edad <= 20){
            restDiabe = 'Usted tiene diabetes tipo 1';
        }
        else if(data.glucosa >= 200 && data.imc >= 18.5 && data.imc <= 24.9 && data.edad >= 21){
            restDiabe = 'Usted tiene diabetes tipo 2';
        }
        Alert.alert('Sus Datos', 'Edad: ' + data.edad + ' años' +'\nPeso: ' + data.peso + ' kg' +'\nAltura: ' + data.altura + ' cm' + '\nPresión Sistólica: ' + data.presionSistolica + ' mmHg\nPresión Diastólica: ' + data.presionDiastolica + ' mmHg\nGlucosa en la sangre: ' + data.glucosa + ' mg/dl\nIMC: ' + data.imc +' kg/m2\n\nFrecuencia Cardiaca:\n' + restFreCardi + '\n\nDiabetes:\n' + restDiabe);

        /*data[presionDiastolica] = '';
        data[presionSistolica] = '';
        data[edad] = '';
        data[peso] = '';
        data[altura] = '';
        data[glucosa] = '';
        data[imc] = '';*/
    }

    /*const limpiarCampos = () => {
        refpresionSistolica.current.clear();
        refpresionDiastolica.current.clear();
        refEdad.current.clear();
        refPeso.current.clear();
        refAltura.current.clear();
        refGlucosa.current.clear();
        refIMC.current.clear();
        restDiabe = '';
        restFreCardi = '';
    }*/

    return (
        <ImageBackground source={require('./Pictures/Fondo.jpg')} style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.title}>Test de Salud</Text>
                <Text style={styles.textMin}>Aplicacion movil para poder calcular** la Frecuencia Cardiaca y la Diabetes</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 100,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            placeholder='Presión Sistólica (mmHg)'
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            ref={refpresionSistolica}
                        />
                    )}
                    name="presionSistolica"
                />
                {errors.presionSistolica && <Text style={styles.textAlert}>La presión sistólica es requerida...</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 100,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            placeholder='Presión Diastólica (mmHg)'
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            ref={refpresionDiastolica}
                        />
                    )}
                    name="presionDiastolica"
                />
                {errors.presionDiastolica &&
                    <Text style={styles.textAlert}>La presión Diastólica es requerida...</Text>}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 100,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            placeholder='Edad (años)'
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            ref={refEdad}
                        />
                    )}
                    name="edad"
                />
                {errors.edad && <Text style={styles.textAlert}>La edad es requerida...</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 100,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            placeholder='Peso (kg)'
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            ref={refPeso}
                        />
                    )}
                    name="peso"
                />
                {errors.peso && <Text style={styles.textAlert}>El peso es requerido...</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 100,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            placeholder='Altura (cm)'
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            ref={refAltura}
                        />
                    )}
                    name="altura"
                />
                {errors.edad && <Text style={styles.textAlert}>La altura es requerida...</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 100,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            placeholder='Glucosa en la sangre (mg/dl)'
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            ref={refGlucosa}
                        />
                    )}
                    name="glucosa"
                />
                {errors.glucosa && <Text style={styles.textAlert}>La glucosa es requerida...</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 100,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            placeholder='IMC (kg/m2)'
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            ref={refIMC}
                        />
                    )}
                    name="imc"
                />
                {errors.imc && <Text style={styles.textAlert}>El IMC es requerido...</Text>}

                <Text>{"\n\n"}</Text>
                <View style={styles.fixToText}>
                    <Button
                        title="Aceptar"
                        color="#01FDC8"
                        onPress={handleSubmit(onSubmit)}
                    />
                    {/*<Button
                        title="Limpiar"
                        color={"#FF0000"}
                        onPress={limpiarCampos}
                    />*/}
                </View>
                <Text style={styles.textMin}>{"\n\n\n\n\n"}&copy; 2023 Copyright. All rights reserved - V24</Text>
            </View>
        </ImageBackground>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontSize: 70,
        color: '#000000',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 18,
        color: '#000',
        marginTop: 10,
    },
    textAlert: {
        fontSize: 10,
        color: '#FF0000',
        marginTop: 10,
    },
    textMin: {
        fontSize: 10,
        color: '#000000',
        marginTop: 10,
    },
    textInput: {
        padding: 6,
        paddingStart: 20,
        width: '70%',
        height: 40,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});