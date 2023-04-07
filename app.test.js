const login = require('./app')

describe('Đây là nhóm test case dành cho hàm Login()', () => {
    // test('TC01: Tên đăng nhập bị bỏ rỗng', () => {
    //     expect(login("", "12345")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!"})
    // })
    
    // test('TC02: Mật khẩu có độ dài < 6 ký tự', () => {
    //     expect(login("khachuong", "12345")).toMatchObject({isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!"})
    // })
    
    
    // test('TC03: Kiểu dữ liệu truyền vào bị sai', () => {
    //     expect(login(399944, "12345678")).toMatchObject({isSuccess: false, message: "Sai định dạng dữ liệu"})
    // })

    // test('TC04: Tên đăng nhập hoặc mật khẩu không đúng', () => {
    //     expect(login("fdfdfdf", "12345678")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không đúng"})
    // })
    // test('TC05: Đăng nhập đúng thông tin', () => {
    //     expect(login("khachuong", "123456")).toMatchObject({isSuccess: true, message: "Đăng nhập thành công!"})
    // })
    // test('TC06: Đăng nhập ki tụ đăng biệt', () => {
    //     expect(login("khachuo*ng", "123456")).toMatchObject({isSuccess: false, message: "Tên đăng nhập có kí tự đặc biệt"})
    // })
    test('TC01: Tên đăng nhập bị bỏ rỗng', () => {
        expect(login("", "12345")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!"})
    })
    
    test('TC02: Mật khẩu có độ dài < 6 ký tự', () => {
        expect(login("khachuong", "12345")).toMatchObject({isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!"})
    })
    
    
    test('TC03: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(login(399944, "12345678")).toMatchObject({isSuccess: false, message: "Sai định dạng dữ liệu"})
    })

    test('TC04: Tên đăng nhập trùng với mật khẩu', () => {
        expect(login("12345", "12345")).toMatchObject({isSuccess: false, message: "Tài khoản không được trùng với mật khẩu"})
    })
    test('TC05: Mật khẩu bị bỏ rỗng', () => {
        expect(login("khachuong", "")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!"})
    })
    test('TC06: Mật khẩu sai', () => {
        expect(login("khachuong", "12345hfyy")).toMatchObject({isSuccess: false, message: "Mật khẩu không đúng"})
    })
    test('TC07: Tài khoản không tồn tại', () => {
        expect(login("thuphuong", "12345")).toMatchObject({isSuccess: false, message: "Tài khoản đăng nhập không đúng"})
    })
    test('TC08: Mật khẩu có độ dài > 20 ký tự', () => {
        expect(login("khachuong", "account01lư222222efjhewojeworjwelfjwelfewnflkfnd")).toMatchObject({isSuccess: false, message: "Mật khẩu phải bé hơn 20 ký tự!"})
    })
    test('TC09: Tài khoản có khoảng trống', () => {
        expect(login("thuphuon g", "12345")).toMatchObject({isSuccess: false, message: "Tài khoản đăng nhập không đúng"})
    })
    test('TC010: Đăng nhập đúng thông tin', () => {
        expect(login("khachuong", "12345678")).toMatchObject({isSuccess: true, message: "Đăng nhập thành công!"})
    })
})
//Viết 1 middleware check xem đã đăng nhập rồi, và có quyền admin thì mới báo ok
// b1 tạo api đăng nhập trả về status đăng nhập và username có phải admin hay k rồi check tiếp