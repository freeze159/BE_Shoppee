# BE_Nodejs
10/10/2023
Day 2:
1/ Nhược điểm của cách Connect cũ. => Goi nhieu connection
2/ Cách connect mới, reconmmend => file init.mongodb => Dung singleton pattern return instance
3/ Kiểm tra hệ thống có bao nhiêu Connect
4/ Thông báo khi server quá tải.
5/ Có nên disconnect() liên tục hay không. Không cần mongo tự đóng mở connection khi cần.Vẫn có thể manual đóng
6/ PoolSize là gì? Vì sao lại quan trọng.
 -PoolSize giới hạn kết nối
7/ Nếu vượt quá kết nối poolSize???

11/10/2023
Day3:
Vì sao cần file env. File env # config như nào
Có thể không cần cũng dc nếu không cần lưu những thông tin nhạy cảm.

dùng env lưu thông tin sensitive. config thì không có thể lưu mọi định dạng
