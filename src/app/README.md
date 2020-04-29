# การใช้งาน Dependencies

## bs-custom-file-input
เป็น Dependency ที่ใช้สำหรับเลือก File สำหรับ Upload

ลิ้งต้นทาง
[bs-custom-file-input](https://www.npmjs.com/package/bs-custom-file-input)
``` bash
# การติดตั้ง
npm i bs-custom-file-input --save

```

``` ts
// การใช้งานใน TypeScript
import bsCustomFileInput from 'bs-custom-file-input';

ngOnInit() {
    bsCustomFileInput.init(); 
}
```

``` html
<!-- การใช้งานในส่วนของ Html -->
<div class="custom-file">
    <input type="file" class="custom-file-input" id="customFile">
    <label class="custom-file-label" for="customFile">Choose file</label>
</div>
```
---
---