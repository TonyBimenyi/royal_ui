<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>OTP Verification</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div class="otp-input-container">
          <input
            v-for="(input, index) in otpInputs"
            :key="index"
            v-model="otpInputs[index]"
            type="tel"
            maxlength="1"
            @keydown="handleKeyDown(index, $event)"
            @input="handleInput(index)"
            @paste="handlePaste(index, $event)"
            class="otp-input"
          />
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        otpInputs: Array(6).fill(''), // Array to hold OTP input values
      };
    },
    methods: {
      handleKeyDown(index, event) {
        // Move focus to the next input field on right arrow key press
        if (event.key === 'ArrowRight') {
          if (index < 5) {
            this.$refs[`input_${index + 1}`].focus();
          }
        }
        // Move focus to the previous input field on left arrow key press
        else if (event.key === 'ArrowLeft') {
          if (index > 0) {
            this.$refs[`input_${index - 1}`].focus();
          }
        }
      },
      handleInput(index) {
        // Allow only single-digit numbers
        if (!/^\d$/.test(this.otpInputs[index])) {
          this.otpInputs[index] = '';
        }
      },
      handlePaste(index, event) {
        // Prevent pasting multiple characters into a single input field
        event.preventDefault();
        const pastedData = event.clipboardData.getData('text');
        if (/^\d$/.test(pastedData)) {
          this.otpInputs[index] = pastedData;
          // Move focus to the next input field
          if (index < 5) {
            this.$refs[`input_${index + 1}`].focus();
          }
        }
      },
    },
  };
  </script>
  
  <style src="../theme/otp.css" scoped>
  .otp-input-container {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .otp-input {
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 20px;
  }
  </style>
  