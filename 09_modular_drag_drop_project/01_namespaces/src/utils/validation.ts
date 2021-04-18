namespace App {
  // Form validation
  export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export function validate(inputConf: Validatable) {
    let isValid = true;
    if (inputConf.required) {
      isValid = isValid && inputConf.value.toString().trim().length > 0;
    }
    if (inputConf.minLength != null && typeof inputConf.value === "string") {
      isValid = isValid && inputConf.value.length >= inputConf.minLength;
    }
    if (inputConf.maxLength != null && typeof inputConf.value === "string") {
      isValid = isValid && inputConf.value.length <= inputConf.maxLength;
    }

    if (inputConf.min != null && typeof inputConf.value === "number") {
      isValid = isValid && inputConf.value >= inputConf.min;
    }
    if (inputConf.max != null && typeof inputConf.value === "number") {
      isValid = isValid && inputConf.value <= inputConf.max;
    }
    return isValid;
  }
}
