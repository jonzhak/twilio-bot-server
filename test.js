var jwt = require('jsonwebtoken');
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImQ3NjM1OGNmYjc4NzdhZTdjYWE4ZDdjNTY3YjYwZjdhY2YzZmQ0MjQifQ.eyJpZCI6IjYwZDVjMjRlZTdhNzUzMDAwNDZkMmViNiIsImVtYWlsIjoia2FybnVybWF4QG1haWwucnUiLCJzaXRlIjoiNjBkNWI3ZDBhNDU1MWYwMDA0ODUyNDJlIiwiaWF0IjoxNjI1MTEzMjA4LCJleHAiOjE2MjU3MTgwMDh9.WG-McLzPC4jPj7iPA3gTwue54_6e5_x1s_kivxA43VwjDxXkv1gmy_-C_3CLGs4fPy9qK1GYDZgf25jH6dPeuSiELp2iDp34biS2FUeBnp_qWeCuKrDYH6DTVr1ibMwk3B-oO7P0FfFzHJGuS0XoQOcyw7MEErADuBrKO1GAI4zCjuSxEhPdTO_PZ9vYkW1ix61hZeVZHVH-KiVYxT_VDBI-HdcK0baAp9Uou9ZEixeVQM9_6JzhL7WAkbES0T_BQPD83KTHktdjKS02doJnLwLCxMNgrGLql811Fh4b2egLt2cjMDcEX1atN9bOXxRq00qRjE8MS13KqjLmK-yYR4FH6S0i4LNGvRJ1GAfM2Y0iR2sL-S31buuATGrxWGEInRADDspr9hVYomqLSKgPG_C0kiaRfjDI7QvWmfs73d_E9QTFtXMGFiGW0TEafgmVS4vjRqJ_8LdxuMdsBXZ0X4F-agGGJ0WPRnBqi9pjjo4wmtxQ9HoCyxWb-UoV5fhOjcDe6OMCCQssTAbdBgZGpKIS3uE4jgqU8O0F20mxv_mZ83JrtTrO4i2HCgO667_cs7yIsNbUNwGwI_14P9w57WE4qfj7yXn8PqI3gwCM8DiPIfVle3TJxhDUid_WYjviNCcpYyTTWiulcqiM7iOZafDSijwQvPY0S4WSEuftJZ4";
const publicKey = {
    d76358cfb7877ae7caa8d7c567b60f7acf3fd424: "-----BEGIN PUBLIC KEY----- MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAstQvl2wNK+akrEcyuuBe JH7OTJLjb+hd8FxnzRreCQiMATRrvdVHUL+htZmS5gDZKIgISXCinChT0yj0kLn8 Z5GrihRd2HJN4A80eZHcuH4Ok6pM6FZl6BWxJEASb2XJqk5eUGbLYBc3xR9ie47x IZSWmDfvA7M+5HeFq90SXx31/3VOWGXJS44xYwhdUTw35N0vox3duupX4O5H4Ile e/fNuhmq6SJ6lDx51i+7HiYbWYRKr4WFVCOjULOM1rYTwcMbvZyaMdcEnNvO+og6 /pllVqn4M5KQy71b5r70WGBNXB0HG/dOsucYgzNRwwQeAgD5VJcud+ScbeSVMs+K VxTWzx8xMUA85MRSNHRE5XmsDI5pz6Xly7DxSiQkr19T002dyKqfjS4vLG6IAL/1 QUo2KUP66xGVABSy0x9b4zhh9w/lmJvdWScs58e+ytUbCjrF5TZ/pOBeXWIDjYtw wYn1L+y/VOsITSThINN5wc63GZ6bB3N60yLP/TCl/eh7UHAQXofOAT8NfGn7kJPq ZaWDzSBkKtyiYU9p/ojuKd782aHKY6ik7gI7NTASfrErFQpic4dl0o+2YiBFwRb9 MeTibxjkEEpcKTT4LEk4Ri2rYwvipTAtLiCwopyOwESuhwWT845XC97brFRtGaah IYmJmMQnls7JbLy0JwRCoEUCAwEAAQ== -----END PUBLIC KEY----- "
}
var decoded = jwt.decode(token);
console.log(decoded) // bar


var key = publicKey;



var options = {
    algorithms: ['RS256'],
    type: 'JWT'
};

jwt.verify(token, key, options, function(err, p) {
    console.log(err, p)
});