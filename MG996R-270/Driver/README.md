# MG996R Driver

Servo MG-996R 's Driver(0-270) description if have.

## Device Model

- [MG996R](https://rap.ruff.io/devices/MG996R)

## Install

```sh
> rap device add --model MG996R --id <device-id> 
```

## Demo

Supposed \<device-id\> is `mg996r` in the following demos.

```js
$('#mg996r'). setAngle(angle);
```

<div align="center">
<img src="https://rap.ruff.io/api/devices/MG996R/image?1504968374050" width = "391" height = "203" alt="device demo" />
</div>

## API References

### Methods

#### `setAngle()`

The function of method func().

### Properties (opt.)
angle between 0~270 degrees, in the middle is 135 degrees.

### Events (opt.)

## Supported OS

Test passed on Ruff v1.10.0

## Note

Some notes about device or driver if have.
