


/**
 * This function transforms a class into a FormData object, but only the values that are not null, undefined, empty,
 * and matrix or some complex object, object with nested objects.
 * 
 * This must be simples, and useful for DTOs requests of this project, so not need to handle complex objects.
 * 
 * @param data value to transform
 * @returns FormData with values of data
 */
export const transformClassIntoFormData = (data: any) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        switch(typeof value) {
            case "string":
                formData.append(key, value);
                break;
            case "number":
                formData.append(key, value.toString());
                break;
            case "object":
                if(value instanceof File) {
                    formData.append(key, value);
                }else if(value instanceof Date) {
                    formData.append(key, value.toISOString());
                }else if (value !== null && value != undefined) {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formData.append(`${key}[${subKey}]`, subValue);
                    })
                }else {
                    throw new Error('Object is null or undefined');
                }
                break;
        }
    }) 

    return formData;
}

