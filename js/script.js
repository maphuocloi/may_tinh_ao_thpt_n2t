const INFO = {
display_port: {
  title: 'DisplayPort (Cổng DisplayPort)',
  text: 'DisplayPort là cổng truyền tải hình ảnh và âm thanh kỹ thuật số chất lượng cao từ máy tính đến màn hình. Nó hỗ trợ độ phân giải lớn, tần số quét cao và đồng bộ hóa hình ảnh, thường dùng trong màn hình đồ họa, gaming và các thiết bị chuyên nghiệp.'
},

lan_port: {
  title: 'LAN Port (Cổng mạng LAN)',
  text: 'Cổng LAN, thường dùng với giắc RJ45, cho phép máy tính kết nối mạng nội bộ hoặc Internet thông qua cáp Ethernet. Nó hỗ trợ tốc độ truyền dữ liệu ổn định, độ trễ thấp, phù hợp cho làm việc, học tập và chơi game cần kết nối băng thông cao.'
},

hdmi_cable: {
  title: 'HDMI Cable (Cáp HDMI)',
  text: 'Cáp HDMI truyền đồng thời hình ảnh và âm thanh kỹ thuật số từ máy tính, TV box hoặc thiết bị đa phương tiện đến màn hình hoặc TV. Nó hỗ trợ độ phân giải cao, bao gồm Full HD, 4K và HDR, mang lại chất lượng hiển thị sắc nét và âm thanh chuẩn.'
},

displayport_cable: {
  title: 'DisplayPort Cable (Cáp DisplayPort)',
  text: 'Cáp DisplayPort dùng để kết nối máy tính với màn hình hỗ trợ DisplayPort, cho khả năng truyền tín hiệu hình ảnh độ phân giải cao và tần số quét lớn. Nó rất phù hợp cho màn hình chuyên đồ họa, chơi game hoặc các thiết bị cần hiệu suất hiển thị mạnh.'
},

vga_cable: {
  title: 'VGA Cable (Cáp VGA)',
  text: 'Cáp VGA truyền tín hiệu hình ảnh dạng tương tự từ máy tính đến màn hình hoặc máy chiếu. Dù là công nghệ cũ, VGA vẫn được dùng trong thiết bị đời cũ hoặc máy chiếu truyền thống, nhưng chất lượng hình ảnh không cao bằng HDMI hay DisplayPort.'
},

scanner: {
  title: 'Scanner (Máy quét)',
  text: 'Máy quét là thiết bị ngoại vi giúp chuyển đổi hình ảnh, tài liệu giấy hoặc ảnh chụp thành dữ liệu số để lưu trữ hoặc chỉnh sửa trên máy tính. Nó hoạt động bằng cách quét bề mặt tài liệu và tạo ra bản sao kỹ thuật số với độ phân giải cao, thường dùng trong văn phòng và thiết kế đồ họa.'
},

webcam: {
  title: 'Webcam (Camera máy tính)',
  text: 'Webcam là thiết bị ghi hình kỹ thuật số kết nối với máy tính, dùng để truyền hình ảnh và video thời gian thực trong các cuộc họp, học trực tuyến hoặc livestream. Nhiều webcam còn tích hợp micro và tự động điều chỉnh ánh sáng để mang lại hình ảnh rõ nét, trung thực.'
},

microphone: {
  title: 'Microphone (Micro thu âm)',
  text: 'Microphone là thiết bị thu âm thanh từ môi trường xung quanh hoặc giọng nói của người dùng, chuyển đổi thành tín hiệu số để xử lý trên máy tính. Nó thường được sử dụng trong ghi âm, họp trực tuyến, dạy học trực tiếp hoặc chơi game có giao tiếp thoại.'
},

barcode_scanner: {
  title: 'Barcode Scanner (Máy quét mã vạch)',
  text: 'Máy quét mã vạch dùng để đọc và giải mã các dãy ký hiệu mã vạch trên sản phẩm, giúp nhập dữ liệu nhanh và chính xác vào hệ thống. Thiết bị này thường được sử dụng trong bán hàng, quản lý kho, kiểm kê hàng hóa và theo dõi sản phẩm bằng công nghệ nhận dạng tự động.'
},
  
cpu: {
    title: 'CPU (Bộ xử lý trung tâm)',
    text: 'CPU là bộ xử lý trung tâm của máy tính, chịu trách nhiệm thực thi lệnh, xử lý dữ liệu và điều phối hoạt động giữa các bộ phận phần cứng khác. Hiệu suất của CPU quyết định tốc độ xử lý tổng thể của hệ thống, ảnh hưởng trực tiếp đến khả năng chạy ứng dụng và đa nhiệm.'
},

ssd: { 
    title: 'SSD (Ổ đĩa thể rắn)', 
    text: 'Ổ đĩa thể rắn (SSD) là thiết bị lưu trữ dữ liệu tốc độ cao, không dùng đĩa quay như HDD nên hoạt động êm, bền và tiết kiệm điện. SSD giúp khởi động hệ điều hành, mở phần mềm và sao chép dữ liệu nhanh hơn gấp nhiều lần so với ổ cứng truyền thống, tăng hiệu suất tổng thể cho máy tính.' 
  },

gpu: { 
    title: 'GPU (Bộ xử lý đồ họa)', 
    text: 'GPU (Graphics Processing Unit) là bộ xử lý đồ họa chịu trách nhiệm hiển thị hình ảnh, video, và mô phỏng 3D. Ngoài ra, GPU còn hỗ trợ tăng tốc xử lý trong các lĩnh vực như trí tuệ nhân tạo, học máy và render video. GPU mạnh giúp chơi game, thiết kế và xử lý đồ họa mượt mà hơn.' 
  },

monitor: { 
    title: 'Monitor (Màn hình)', 
    text: 'Màn hình hiển thị hình ảnh, video, văn bản và giao diện hệ điều hành của máy tính. Nó là cầu nối trực quan giữa người dùng và hệ thống. Các màn hình hiện đại hỗ trợ độ phân giải cao, màu sắc chuẩn, tốc độ quét nhanh và công nghệ tiết kiệm năng lượng, phù hợp cho học tập, làm việc và giải trí.' 
  },

keyboard: { 
    title: 'Keyboard (Bàn phím)', 
    text: 'Bàn phím là thiết bị nhập liệu chính, cho phép người dùng nhập văn bản, số liệu và lệnh điều khiển. Ngoài gõ chữ, bàn phím còn hỗ trợ các phím tắt giúp thao tác nhanh và hiệu quả hơn. Một số bàn phím có đèn nền, phím cơ hoặc kết nối không dây tăng trải nghiệm sử dụng.' 
  },

mouse: { 
    title: 'Mouse (Chuột máy tính)', 
    text: 'Chuột máy tính giúp điều khiển con trỏ trên màn hình để chọn, kéo thả, mở ứng dụng và thực hiện thao tác trực quan. Có nhiều loại chuột như quang học, laser, không dây hay gaming. Chuột hiện đại còn có thêm nút phụ, cảm biến DPI cao và thiết kế công thái học giúp thao tác chính xác, thoải mái hơn.' 
  },

printer: { 
    title: 'Printer (Máy in)', 
    text: 'Máy in là thiết bị xuất dữ liệu kỹ thuật số ra giấy, thường dùng để in văn bản, hình ảnh hoặc tài liệu. Ngoài chức năng in, nhiều máy còn có thể photocopy, scan hoặc fax. Có hai loại phổ biến là máy in phun và máy in laser, đáp ứng nhu cầu từ văn phòng đến gia đình.' 
  },

speaker: { 
    title: 'Speaker (Loa)', 
    text: 'Loa máy tính giúp phát ra âm thanh từ các tệp nhạc, video hoặc ứng dụng. Loa có thể là dạng tích hợp hoặc rời, kết nối qua cổng 3.5mm, USB hoặc Bluetooth. Hệ thống loa đa kênh (2.1, 5.1...) mang đến trải nghiệm âm thanh sống động, phục vụ học tập, giải trí và hội nghị trực tuyến.' 
  },

headphone: { 
    title: 'Headphone (Tai nghe)', 
    text: 'Tai nghe là thiết bị âm thanh cá nhân, giúp nghe nhạc, xem phim hoặc họp trực tuyến mà không làm phiền người khác. Tai nghe có thể có dây hoặc không dây, nhiều mẫu còn tích hợp micro, chống ồn chủ động và âm thanh vòm. Đây là công cụ quan trọng cho học tập, làm việc và giải trí cá nhân.' 
  },

fan: { 
    title: 'System Fan (Quạt tản nhiệt)', 
    text: 'Quạt tản nhiệt có nhiệm vụ làm mát cho các linh kiện bên trong thùng máy như CPU, GPU, PSU. Nó giúp duy trì nhiệt độ ổn định, tránh quá nhiệt dẫn đến giảm hiệu suất hoặc hư hỏng. Một số quạt cao cấp còn tích hợp đèn LED RGB và cảm biến điều tốc theo nhiệt độ hệ thống.' 
  },

vga: { 
    title: 'VGA (Card đồ họa)', 
    text: 'Card đồ họa xử lý và xuất hình ảnh ra màn hình. Ngoài chức năng hiển thị, VGA còn hỗ trợ các tác vụ nặng như chơi game, dựng hình 3D, biên tập video và xử lý AI. Card đồ họa rời có bộ nhớ và quạt riêng, giúp xử lý nhanh hơn so với card tích hợp trên bo mạch chủ.' 
  },

heatsink: { 
    title: 'Heatsink (Bộ tản nhiệt)', 
    text: 'Bộ tản nhiệt có nhiệm vụ hấp thụ và phân tán nhiệt từ CPU hoặc GPU qua các lá nhôm và quạt gió. Việc tản nhiệt hiệu quả giúp hệ thống hoạt động ổn định, tránh hiện tượng quá nhiệt. Một số tản nhiệt cao cấp sử dụng chất lỏng hoặc ống dẫn nhiệt để tăng khả năng làm mát.' 
  },

hdd: { 
    title: 'HDD (Ổ cứng từ)', 
    text: 'Ổ cứng HDD lưu trữ dữ liệu bằng đĩa từ quay, có dung lượng lớn và giá thành thấp. Tuy tốc độ truy xuất chậm hơn SSD, nhưng HDD thích hợp lưu trữ lâu dài các tệp dung lượng lớn như video, hình ảnh, hoặc bản sao lưu hệ thống. Là lựa chọn phổ biến trong máy tính để bàn và máy chủ.' 
  },

optical: { 
    title: 'Optical Drive (Ổ đĩa quang)', 
    text: 'Ổ đĩa quang dùng để đọc hoặc ghi dữ liệu từ đĩa CD, DVD hoặc Blu-ray. Nó thường được sử dụng để cài đặt phần mềm, sao lưu dữ liệu hoặc phát nhạc và phim. Dù ít phổ biến hơn do USB và Internet, ổ quang vẫn hữu ích trong học tập và lưu trữ truyền thống.' 
  },

psu: { 
    title: 'PSU (Bộ nguồn máy tính)', 
    text: 'Bộ nguồn chuyển đổi điện xoay chiều (AC) từ ổ cắm thành điện một chiều (DC) cho linh kiện máy tính. PSU đảm bảo điện áp ổn định, bảo vệ linh kiện khỏi quá tải hoặc chập điện. Một PSU tốt giúp hệ thống vận hành bền bỉ, tiết kiệm điện và hỗ trợ nhiều đầu cắm mở rộng.' 
  },

mainboard: { 
    title: 'Mainboard (Bo mạch chủ)', 
    text: 'Bo mạch chủ là nền tảng kết nối tất cả các linh kiện như CPU, RAM, GPU, ổ đĩa và thiết bị ngoại vi. Nó điều phối giao tiếp giữa các thành phần, cung cấp nguồn và dữ liệu. Mainboard hiện đại còn hỗ trợ công nghệ USB 3.2, PCIe, Wi-Fi và RGB Sync cho hệ thống mạnh mẽ hơn.' 
  },

ram: { 
    title: 'RAM (Bộ nhớ truy cập ngẫu nhiên)', 
    text: 'RAM lưu trữ dữ liệu tạm thời khi chương trình đang chạy, giúp CPU truy cập nhanh hơn so với ổ cứng. Dung lượng RAM càng lớn thì khả năng xử lý đa nhiệm càng tốt. Đây là yếu tố quan trọng quyết định tốc độ và hiệu suất của máy tính.' 
  },

case: { 
    title: 'Case (Vỏ máy tính)', 
    text: 'Vỏ máy tính bảo vệ và cố định các linh kiện bên trong như bo mạch chủ, nguồn, ổ đĩa và quạt. Nó giúp tản nhiệt, giảm bụi, giảm tiếng ồn và tăng tính thẩm mỹ cho hệ thống. Một số case có cửa kính, đèn RGB và thiết kế tối ưu luồng khí giúp làm mát hiệu quả hơn.' 
  },

audio_port: { 
  title: 'Audio Port (Cổng âm thanh)', 
  text: 'Cổng Audio cho phép máy tính kết nối với các thiết bị âm thanh như tai nghe, loa hoặc micro. Nó hỗ trợ cả đầu ra và đầu vào âm thanh, giúp phát nhạc, thu âm hoặc giao tiếp trực tuyến. Một số máy còn có nhiều cổng riêng cho micro và loa để tăng chất lượng âm thanh.'
  },

com_port: { 
  title: 'COM Port (Cổng nối tiếp)', 
  text: 'Cổng COM, hay còn gọi là cổng Serial, được dùng để truyền dữ liệu nối tiếp giữa máy tính và thiết bị ngoại vi như modem, máy đo hoặc bộ điều khiển công nghiệp. Dù đã ít dùng trên máy tính hiện đại, nó vẫn phổ biến trong các hệ thống nhúng và thiết bị kỹ thuật chuyên dụng.'
  },

hdmi_port: { 
  title: 'HDMI Port (Cổng HDMI)', 
  text: 'Cổng HDMI truyền đồng thời tín hiệu hình ảnh và âm thanh kỹ thuật số chất lượng cao giữa máy tính và thiết bị hiển thị như màn hình, TV hoặc máy chiếu. HDMI hỗ trợ độ phân giải cao, âm thanh đa kênh và khả năng kết nối plug-and-play tiện lợi, không cần nén dữ liệu.'
  },

lpt_port: { 
  title: 'LPT Port (Cổng song song)', 
  text: 'Cổng LPT, hay Parallel Port, là chuẩn kết nối truyền thống dùng để giao tiếp với máy in và thiết bị truyền dữ liệu song song. Mặc dù đã bị thay thế bởi USB, nó từng là giao diện phổ biến trong các máy tính đời cũ, đặc biệt trong môi trường công nghiệp hoặc giáo dục.'
  },

ps2_port: { 
  title: 'PS/2 Port (Cổng bàn phím/chuột cũ)', 
  text: 'Cổng PS/2 dùng để kết nối bàn phím và chuột kiểu cũ, thường có hai màu xanh và tím để phân biệt. Dù hiện nay USB đã thay thế phần lớn, PS/2 vẫn có ưu điểm ổn định và nhận thiết bị ngay khi khởi động, nên đôi khi vẫn xuất hiện trên bo mạch chủ hiện đại.'
  },

rj45: { 
  title: 'RJ45 Jack (Giắc mạng Ethernet)', 
  text: 'Giắc RJ45 là đầu nối tiêu chuẩn của cáp mạng Ethernet, dùng để kết nối máy tính, router hoặc switch trong mạng LAN. Nó hỗ trợ truyền dữ liệu tốc độ cao, ổn định và an toàn hơn Wi-Fi. RJ45 thường được dùng trong mạng LAN ở các văn phòng, trường học và hệ thống máy chủ.'
},

usb_port: { 
  title: 'USB Port (Cổng USB)', 
  text: 'Cổng USB là giao diện kết nối phổ biến dùng để truyền dữ liệu và cấp điện cho thiết bị ngoại vi như chuột, bàn phím, điện thoại, ổ cứng hoặc máy in. Các chuẩn USB hiện đại như USB 3.0 hay USB type C hỗ trợ tốc độ cao, sạc nhanh và khả năng kết nối đảo chiều tiện lợi.'
},

vga_port: { 
  title: 'VGA Port (Cổng VGA)', 
  text: 'Cổng VGA (Video Graphics Array) truyền tín hiệu hình ảnh tương tự từ máy tính đến màn hình hoặc máy chiếu. Dù đã được thay thế bởi HDMI và DisplayPort, VGA vẫn được sử dụng rộng rãi trong các thiết bị cũ nhờ tính tương thích cao và độ ổn định tốt.'
},

oip: {
  title: 'OIP (Cáp đồng trục)',
  text: 'Cáp đồng trục có cấu trúc gồm lõi đồng dẫn tín hiệu, lớp cách điện, lưới kim loại chống nhiễu và vỏ bảo vệ. Nó được dùng để truyền tín hiệu mạng, truyền hình cáp hoặc camera an ninh với độ ổn định cao, ít suy hao tín hiệu và khả năng chống nhiễu tốt.'
},

fiber_optic: {
  title: 'Fiber Optic (Cáp quang)',
  text: 'Cáp quang truyền dữ liệu bằng tín hiệu ánh sáng qua sợi thủy tinh hoặc nhựa, cho tốc độ rất cao và khoảng cách truyền xa hơn cáp đồng. Nó được sử dụng phổ biến trong hạ tầng Internet, trung tâm dữ liệu và mạng doanh nghiệp nhờ độ ổn định và bảo mật vượt trội.'
},

utp: {
  title: 'UTP (Cáp xoắn đôi)',
  text: 'Cáp xoắn đôi UTP gồm nhiều cặp dây đồng được xoắn lại để giảm nhiễu điện từ. Đây là loại cáp mạng phổ biến nhất trong mạng LAN hiện nay nhờ chi phí thấp, dễ thi công, linh hoạt và tương thích với hầu hết các thiết bị mạng như switch, router và máy tính.'
},

  router: {
    title: 'Router (Bộ định tuyến)',
    text: 'Router là thiết bị định tuyến giúp kết nối nhiều mạng khác nhau, chẳng hạn mạng LAN trong gia đình với Internet. Nó quản lý đường đi của dữ liệu, phân phối gói tin đến đúng nơi, đồng thời có thể bảo mật, chia sẻ IP và kiểm soát băng thông cho các thiết bị trong mạng.'
  },
  modem: {
    title: 'Modem (Bộ điều giải)',
    text: 'Modem là thiết bị trung gian chuyển đổi tín hiệu số từ máy tính thành tín hiệu tương tự để truyền qua đường dây của nhà cung cấp Internet và ngược lại. Nó giúp thiết lập kết nối mạng, là cầu nối giữa người dùng và hạ tầng mạng toàn cầu.'
  },
  switch: {
    title: 'Switch (Bộ chuyển mạch)',
    text: 'Switch là thiết bị mạng thông minh kết nối nhiều máy tính, máy in hoặc thiết bị khác trong mạng LAN. Nó xác định địa chỉ MAC của từng thiết bị để gửi dữ liệu chính xác, giúp truyền tải ổn định, nhanh hơn và bảo mật hơn so với Hub.'
  },
  hub: {
    title: 'Hub (Bộ chia mạng)',
    text: 'Hub là thiết bị mạng cơ bản dùng để kết nối nhiều máy tính trong cùng mạng LAN. Nó phát tín hiệu dữ liệu đến tất cả các cổng mà không phân biệt đích đến, nên tốc độ và hiệu quả thấp hơn switch, chủ yếu dùng trong các mạng nhỏ, đơn giản.'
  },
  ap: {
    title: 'Access Point (Điểm truy cập không dây)',
    text: 'Access Point là thiết bị cho phép các thiết bị như điện thoại, laptop, máy tính bảng kết nối mạng có dây qua sóng Wi-Fi. Nó thường được sử dụng để mở rộng vùng phủ sóng Wi-Fi trong văn phòng, trường học hoặc gia đình.'
  },
  repeater: {
    title: 'Repeater (Bộ khuếch đại tín hiệu)',
    text: 'Repeater là thiết bị mở rộng vùng phủ sóng mạng bằng cách thu lại tín hiệu yếu, khuếch đại và phát lại tín hiệu mạnh hơn. Nó giúp tăng phạm vi hoạt động của mạng Wi-Fi hoặc mạng có dây mà không cần thêm đường truyền mới.'
  },
  firewall: {
    title: 'Firewall (Tường lửa bảo mật)',
    text: 'Firewall là hệ thống bảo mật giám sát và kiểm soát lưu lượng dữ liệu ra vào mạng. Nó chặn các truy cập trái phép, mã độc và tấn công mạng, bảo vệ máy tính hoặc hệ thống khỏi rủi ro an ninh mạng và xâm nhập từ bên ngoài.'
  },
  bridge: {
    title: 'Bridge (Cầu nối mạng)',
    text: 'Bridge là thiết bị kết nối và quản lý luồng dữ liệu giữa hai mạng LAN nhỏ, giúp chúng hoạt động như một mạng thống nhất. Nó lọc, chuyển tiếp hoặc chặn gói tin dựa trên địa chỉ MAC, giúp cải thiện hiệu suất và mở rộng phạm vi mạng nội bộ.'
  },
  gateway: {
    title: 'Gateway (Cổng mạng)',
    text: 'Gateway là thiết bị trung gian kết nối các mạng sử dụng giao thức khác nhau, ví dụ giữa mạng LAN và Internet. Nó thực hiện chuyển đổi định dạng dữ liệu, địa chỉ hoặc giao thức để đảm bảo thông tin có thể đi qua và được hiểu ở cả hai đầu.'
  },
  nic: {
    title: 'NIC (Card mạng)',
    text: 'Card mạng là phần cứng giúp máy tính hoặc thiết bị khác kết nối vào mạng, có thể là dạng có dây (Ethernet) hoặc không dây (Wi-Fi). Mỗi NIC có địa chỉ MAC riêng để định danh trong mạng, đảm bảo truyền và nhận dữ liệu chính xác.'
  }
};

// create chat bubble and window
document.addEventListener('DOMContentLoaded', ()=>{
  const bubble = document.getElementById('chatbot-bubble');
  bubble.innerHTML = '&#127897;';
  bubble.addEventListener('click', toggleChatWindow);
  if(!document.getElementById('chat-window')){
    const win = document.createElement('div');
    win.id = 'chat-window';
    win.style.display='none';
    win.innerHTML = `<div class="chat-header"><div>Trợ lý ảo</div><button id="close-chat" class="voice-btn">✖</button></div>
      <div class="chat-body" id="chat-body"><div class="message msg-bot">Xin chào! Bạn cần giúp phần nào?</div></div>
      <div class="chat-input"><input id="chat-input" placeholder="Nhập câu hỏi..."><button id="send-btn" class="btn small">Gửi</button><button id="voice-btn" class="voice-btn">🎤</button></div>`;
    document.body.appendChild(win);
    document.getElementById('close-chat').addEventListener('click', toggleChatWindow);
    document.getElementById('send-btn').addEventListener('click', ()=>{
      const v = document.getElementById('chat-input').value.trim();
      if(v){ sendUserMessage(v); document.getElementById('chat-input').value=''; }
    });
    document.getElementById('voice-btn').addEventListener('click', startSpeechRecognition);
  }
  // attach hotspots click
  document.querySelectorAll('.hotspot, .device').forEach(el=> el.addEventListener('click', ()=>{
    const key = el.dataset.key;
    if(key && INFO[key]){
      const infoEl = document.querySelector('#info');
      if(infoEl) infoEl.innerHTML = '<strong>'+INFO[key].title+'</strong><p>'+INFO[key].text+'</p>';
      speakText(INFO[key].title + '. ' + INFO[key].text);
    }
  }));
});

function toggleChatWindow(){
  const win = document.getElementById('chat-window');
  if(win.style.display==='flex') win.style.display='none'; else win.style.display='flex';
}

function appendMessage(who,text){
  const body = document.getElementById('chat-body');
  const d = document.createElement('div');
  d.className = 'message ' + (who==='user'?'msg-user':'msg-bot');
  d.innerHTML = text;
  body.appendChild(d);
  body.scrollTop = body.scrollHeight;
}

function botResponse(text){
  const t = text.toLowerCase();
  for(const k in INFO){
    if(t.includes(k) || t.includes(INFO[k].title.toLowerCase())) return INFO[k].text;
  }
  if (t.includes('cpu')) return INFO['cpu'].text;
  if (t.includes('ram')) return INFO['ram'].text;
  if (t.includes('main') || t.includes('mạch')) return INFO['mainboard'].text;
  if (t.includes('hdd')) return INFO['hdd'].text;
  if (t.includes('ssd')) return INFO['ssd'].text;
  if (t.includes('psu') || t.includes('nguồn')) return INFO['psu'].text;
  if (t.includes('gpu') || t.includes('card màn hình') || t.includes('card đồ họa')) return INFO['gpu'].text;
  if (t.includes('case') || t.includes('vỏ máy')) return INFO['case'].text;
  if (t.includes('màn hình') || t.includes('monitor')) return INFO['monitor'].text;
  if (t.includes('bàn phím') || t.includes('phím')) return INFO['keyboard'].text;
  if (t.includes('chuột')) return INFO['mouse'].text;
  if (t.includes('máy in') || t.includes('printer')) return INFO['printer'].text;
  if (t.includes('loa') || t.includes('speaker')) return INFO['speaker'].text;
  if (t.includes('tai nghe') || t.includes('headphone')) return INFO['headphone'].text;
  if (t.includes('modem')) return INFO['modem'].text;
  if (t.includes('router') || t.includes('bộ định tuyến')) return INFO['router'].text;
  if (t.includes('switch')) return INFO['switch'].text;
  if (t.includes('hub')) return INFO['hub'].text;
  if (t.includes('access point') || t.includes('wifi') || t.includes('điểm truy cập')) return INFO['access_point'].text;
  if (t.includes('firewall') || t.includes('tường lửa')) return INFO['firewall'].text;
  if (t.includes('fan') || t.includes('quạt')) return INFO['fan'].text;
  if (t.includes('vga_card') || t.includes('card đồ họa')) return INFO['VGA'].text;
  if (t.includes('heatsink') || t.includes('bộ tản nhiệt')) return INFO['heatsink'].text;
  if (t.includes('optical') || t.includes('ổ đĩa quang')) return INFO['optical'].text;
  if (t.includes('audio port') || t.includes('cổng âm thanh')) return INFO['audio_port'].text;
  if (t.includes('com port') || t.includes('cổng com')) return INFO['com_port'].text;
  if (t.includes('hdmi port') || t.includes('cổng hdmi')) return INFO['hdmi_port'].text;
  if (t.includes('lpt port') || t.includes('cổng lpt')) return INFO['lpt_port'].text;
  if (t.includes('ps2 port') || t.includes('cổng ps2')) return INFO['ps2_port'].text;
  if (t.includes('rj45 jack') || t.includes('giắc rj45') || t.includes('cổng mạng')) return INFO['rj45_jack'].text;
  if (t.includes('usb port') || t.includes('cổng usb')) return INFO['usb_port'].text;
  if (t.includes('v.g.a port') || t.includes('cổng v.g.a')) return INFO['vga_port'].text;
  if (t.includes('oip') || t.includes('cáp đồng trục')) return INFO['oip'].text;
  if (t.includes('utp') || t.includes('cáp xoắn đôi')) return INFO['utp'].text;
  if (t.includes('fiber optic') || t.includes('cáp quang')) return INFO['fiber_optic'].text;
  if (t.includes('repeater') || t.includes('bộ khuếch đại tín hiệu')) return INFO['repeater'].text;
  if (t.includes('bridge') || t.includes('bộ nối mạng bridge')) return INFO['bridge'].text;
  if (t.includes('gateway') || t.includes('cổng gateway')) return INFO['gateway'].text;
  if (t.includes('nic') || t.includes('card mạng') || t.includes('bộ điều hợp mạng')) return INFO['nic'].text;
  if (t.includes('displayport') || t.includes('display port') || t.includes('dp')) return INFO['display_port'].text;
  if (t.includes('lan port') || t.includes('cổng lan') || t.includes('ethernet port')) return INFO['lan_port'].text;
  if (t.includes('hdmi cable') || t.includes('cáp hdmi') || t.includes('dây hdmi')) return INFO['hdmi_cable'].text;
  if (t.includes('display cable') || t.includes('cáp displayport') || t.includes('cáp dp')) return INFO['display_cable'].text;
  if (t.includes('vga cable') || t.includes('cáp vga') || t.includes('dây vga')) return INFO['vga_cable'].text;

  return 'Mình chưa hiểu rõ. Bạn thử hỏi lại cụ thể hơn.';
}

// TTS selection & speak
const synth = window.speechSynthesis || null;
let chosenVoice = null;
function selectPreferredVoice(){
  if(!synth) return;
  const voices = synth.getVoices();
  chosenVoice = voices.find(v=> v.lang && v.lang.startsWith('vi') && /nam|south|vn-south|south/i.test(v.name)) || voices.find(v=> v.lang && v.lang.startsWith('vi')) || null;
  // add selector in header if not present
  if(!document.getElementById('voice-select')){
    const sel = document.createElement('select'); sel.id='voice-select'; sel.style.marginLeft='8px';
    voices.forEach(v=>{ const opt=document.createElement('option'); opt.value=v.name; opt.text = v.name + ' ('+v.lang+')'; sel.appendChild(opt); });
    sel.addEventListener('change', ()=>{ const vname=sel.value; chosenVoice = synth.getVoices().find(x=>x.name===vname) || chosenVoice; });
    const header = document.querySelector('.chat-header'); if(header) header.appendChild(sel);
  }
}
if(synth){ selectPreferredVoice(); speechSynthesis.onvoiceschanged = ()=> selectPreferredVoice(); }

function speakText(txt){
  if(!synth) return;
  const u = new SpeechSynthesisUtterance(txt);
  if(chosenVoice) u.voice = chosenVoice;
  u.lang = (chosenVoice && chosenVoice.lang)? chosenVoice.lang : 'vi-VN';
  synth.cancel(); synth.speak(u);
}

function sendUserMessage(text){
  appendMessage('user', text);
  const ans = botResponse(text);
  setTimeout(()=>{ appendMessage('bot', ans); speakText(ans); }, 300);
}

// Speech recognition
function startSpeechRecognition(){
  if(!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)){
    alert('Trình duyệt không hỗ trợ nhận dạng giọng nói. Dùng Chrome hoặc Edge mới nhất.');
    return;
  }
  const Recon = window.SpeechRecognition || window.webkitSpeechRecognition;
  const r = new Recon(); r.lang='vi-VN'; r.interimResults=false; r.maxAlternatives=1;
  r.start();
  const voiceBtn = document.getElementById('voice-btn'); if(voiceBtn) voiceBtn.textContent='🟢 Đang nghe...';
  r.onresult = (ev)=>{ const spoken = ev.results[0][0].transcript; if(voiceBtn) voiceBtn.textContent='🎤'; appendMessage('user', spoken); const ans = botResponse(spoken); appendMessage('bot', ans); speakText(ans); };
  r.onerror = (e)=>{ if(voiceBtn) voiceBtn.textContent='🎤'; alert('Lỗi nhận dạng: '+(e.error||'unknown')); };
  r.onend = ()=>{ if(voiceBtn) voiceBtn.textContent='🎤'; };
}
