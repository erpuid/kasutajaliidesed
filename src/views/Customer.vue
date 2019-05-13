<template>
    <div class="table-responsive px-5 mt-3">
        <b-form @submit="onSubmit">
            <div class="form-row">
                <b-form-group id="name-group" class="col-md-6" label="Eesnimi" label-for="eesnimi">
                    <b-form-input
                            id="eesnimi"
                            v-model="form.name"
                            :state="$v.form.name.$dirty ? !$v.name.$error : null"
                            aria-describedby="eesnimi-live-feedback"
                            placeholder="Eesnimi"
                    ></b-form-input>
                    <b-form-invalid-feedback id="eesnimi-live-feedback">
                        This is a required field
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="name-group2" class="col-md-6" label="Perekonnanimi" label-for="perenimi">
                    <b-form-input
                            id="perenimi"
                            v-model="form.family"
                            :state="$v.form.family.$dirty ? !$v.form.family.$error : null"
                            aria-describedby="perenimi-live-feedback"
                            placeholder="Perekonnanimi"
                    ></b-form-input>
                    <b-form-invalid-feedback id="perenimi-live-feedback">
                        This is a required field
                    </b-form-invalid-feedback>
                </b-form-group>
            </div>
            <div class="form-row">
                <b-form-group id="phone-group" class="col-md-6" label="Telefon" label-for="telefon">
                    <b-form-input
                            type="number"
                            id="telefon"
                            v-model="form.phone"
                            :state="$v.form.phone.$dirty ? !$v.form.phone.$error : null"
                            aria-describedby="phone-live-feedback"
                            placeholder="55555555"
                    ></b-form-input>
                    <b-form-invalid-feedback id="phone-live-feedback">
                        This is a required field
                    </b-form-invalid-feedback>
                </b-form-group>


                <b-form-group id="email-group" class="col-md-6" label="Email" label-for="email">
                    <b-form-input
                            type="email"
                            id="email"
                            v-model="form.email"
                            :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
                            aria-describedby="email-live-feedback"
                            placeholder="mari@email.com"
                    ></b-form-input>
                    <b-form-invalid-feedback id="email-live-feedback">
                        This is a required field
                    </b-form-invalid-feedback>
                </b-form-group>
            </div>
            <b-form-group id="address-group" label="Aadress" label-for="email">
                <b-form-input
                        id="adress"
                        v-model="form.address"
                        :state="$v.form.address.$dirty ? !$v.form.address.$error : null"
                        aria-describedby="email-live-feedback"
                        placeholder="123 Ehitajate tee"
                ></b-form-input>
                <b-form-invalid-feedback id="email-live-feedback">
                    This is a required field
                </b-form-invalid-feedback>
            </b-form-group>
            <div class="form-row">
                <b-form-group id="city-group" class="col-md-5" label="Linn" label-for="city">
                    <b-form-input
                            id="city"
                            v-model="form.city"
                            :state="$v.form.city.$dirty ? !$v.form.city.$error : null"
                            aria-describedby="city-live-feedback"
                            placeholder="Tallinn"
                    ></b-form-input>
                    <b-form-invalid-feedback id="city-live-feedback">
                        This is a required field
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="county-group" class="col-md-5" label="Maakond" label-for="county">
                    <b-form-input
                            id="county"
                            v-model="form.county"
                            :state="$v.form.county.$dirty ? !$v.form.county.$error : null"
                            aria-describedby="county-live-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="county-live-feedback">
                        This is a required field
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="index-group" class="col-md-2" label="Postiindeks" label-for="index">
                    <b-form-input
                            id="index"
                            v-model="form.index"
                            :state="$v.form.index.$dirty ? !$v.form.index.$error : null"
                            aria-describedby="index-live-feedback"
                            placeholder="12345"
                    ></b-form-input>
                    <b-form-invalid-feedback id="index-live-feedback">
                        This is a required field
                    </b-form-invalid-feedback>
                </b-form-group>
            </div>
            <div class="form-row col-md-3">
                <label for="delivery">Tarne</label>
                <select id="delivery" class="form-control">
                    <option selected>Tulen ise järgi</option>
                    <option>Smartpost</option>
                    <option>Kuller</option>
                </select>
            </div>
            <b-button class="btn btn-primary my-4" type="submit" variant="primary" :disabled="$v.form.$invalid">Maksma</b-button>
        </b-form>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength, between, email } from 'vuelidate/lib/validators'
    export default {
        name: "Customer",
        data() {
            return {
                form: {}
            }
        },
        mixins: [validationMixin],
        methods: {
            onSubmit() {
                this.$router.push("/thank")
            },
            isPhone() {
                return true;
                //return /^1(3|4|5|7|8)\d{9}$/.test(this.form.phone)
            }
        },
        validations: {
            form: {
                name: {
                    required
                },
                family: {
                    required
                },
                phone: {
                    required,
                    between: between(100000, 99999999999),
                },
                email: {
                    required,
                    email
                },
                address: {
                    required,
                    minLength: minLength(6)
                },
                city: {
                    minLength: minLength(2)
                },
                county: {
                    minLength: minLength(5)
                },
                index: {
                    between: between(10000, 99999)
                }

            }
        },

    }
</script>

<style scoped>
    body {
        background-color: #F3F3F3;
        height: 100%;
    }

    .li a {
        color: white;
    }


</style>