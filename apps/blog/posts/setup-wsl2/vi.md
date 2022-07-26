---
date: "2020-07-21"
title: "Thiết lập môi trường lập trình trong WSL2"
tags: ['nodejs', 'else']
featuredImage: /featured-images/setup-wsl2/wsl-featured.jpg
---

Windows Subsystem for Linux aka WSL là một tính năng khá ngon của windows đặc biệt là với những ai theo con đường cào phím chuyên nghiệp. Với những ai hay giành thời gian rảnh để code linh tinh này nọ thì thay vì phải cài tùm lum các thứ lên con máy Windows thân yêu mà bạn mua về chủ yếu là để chơi game (công việc thì công ty có phát máy mà), bạn sẽ có mốt cái máy ảo để chỉ cài tất cả những thứ liên quan tới việc code. Khi nào có hứng code thì chỉ cần 1 câu lệnh command line là được, code chán thì cũng 1 dòng lệnh để tắt rồi vô game tấu hài.



#### Để có cơ hội thành công khi làm theo hướng dẫn này bạn cần chuẩn bị:


- Windows 10 đã updated lên version 2004, *Build 19041* trở lên. Để check version hiện tại vô **Run** gõ **winver**.
- Biết chút ít về linux hoặc không biết cũng được 🐧

#### Bắt đầu nhé



Đầu tiên là cài Windows Subsystem for Linux, mở **PowerShell as Administrator**

```shell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

Với dòng lệnh trên thì sau khi restart, máy sẽ hoàn tất cài đặt WSL 1. Để update lên WSL 2 thì tiếp tục

```shell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Restart máy, sau đó tiếp tục gõ lệnh tiếp theo vào **PowerShell** vẫn với quyền Administrator.

```shell
wsl --set-default-version 2
```

Nếu lúc này bạn gặp lỗi `WSL 2 requires an update to its kernel component. For information please visit https://aka.ms/wsl2kernel` thì vô cái link đó download WSL2 Linux kernel về cài vô.



Xong bây giờ vô [Microsoft Store](https://aka.ms/wslstore) để tải về distro Linux muốn dùng, nếu không biết chọn cái nào thì cứ **Ubuntu** mà tán nhé.



Nãy giờ là phần hướng dẫn cửa Microsoft chứ không có gì đặc biệt đâu nếu bạn gặp khó khăn chỗ nào thì vô link gốc để làm theo nhé https://docs.microsoft.com/vi-vn/windows/wsl/install-win10



#### Cài đặt những thứ cần thiết để làm việc trên linux



Trước hết

```shell
sudo apt update
```

```shell
sudo apt upgrade
```

Đầu tiên là cài 2 cái này

```shell
sudo apt install git build-essential
```

câu lệnh trên để cài đặt những phần mềm cần thiết ví dụ git, nếu bạn nào xài Ubuntu thì nó thể nó có rồi nhưng mà cứ cài lại cũng không ảnh hưởng gì đến hoà bình thế giới đâu.

Tiếp theo là zsh
```shell
sudo apt install zsh
```

oh-my-zsh, nhớ yes sau khi cài xong nhé
```shell
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

```

Mấy cái plugin mình đang xài cho zsh nếu bạn muốn dùng thì mới file `~/.zshrc` bằng bất cứ editor nào bạn thích, nếu chưa cài thì có sẵn cái vim. Sau đó sửa cái `plugin` trong đó thành như thế này. Muốn biết từng cái làm gì thì cứ google tên + zsh plugin nhé.
```
plugins=(
	git
	cargo
	gpg-agent
	node
	npm
	nvm
	command-not-found
	compleat
	sudo
	rust
	rustup
	ssh-agent
	vscode
	ubuntu
	yarn
	zsh-interactive-cd
)
```

Chạy lện này nữa là xong cho zsh

```shell
source .zshrc
```



Show thành quả nè



![Zsh](/featured-images/setup-wsl2/wsl-1.png)



Bây giờ tới `Node.js` 



Đầu tiên các bạn vào link này: https://nodejs.org/en/download/package-manager/

Chọn distro đang sử dụng, ví dụ mình sẽ chọn `Debian and Ubuntu based Linux distributions, Enterprise Linux/Fedora and Snap packages`

Click vào link `Node.js binary distributions` bạn sẽ đi tới link này https://github.com/nodesource/distributions/blob/master/README.md

Làm theo hướng dẫn (copy với chạy mấy dòng lệnh ứng với phiên bản muốn cài là được).



Ví dụ mình sẽ dùng lệnh dưới để cái Node.js 14. Một điều mình thích ở Linux là bạn có thể copy và paste mấy dòng lệnh mà ai đó chỉ trên mạng và tự nhiên bạn sẽ có điều bạn cần 😂

```shell
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Sau khi xong bạn chạy thử lệnh `node -v` để check xem đã cài xong chưa nhé. Nếu bạn gặp lỗi liên quan tới khi start `ssh-agent` thì chạy lệnh này

```shell
mkdir ~/.ssh
```

Sẵn thử luôn npm bằng cách cách update npm

```shell
sudo npm i -g npm@latest
```

Nếu muốn sau này cài package global không cần sudo thì chạy 2 lệnh này

```shell
mkdir ~/.npm-global
```

```shell
npm config set prefix '~/.npm-global'
```



Về cơ bản cách cài một thứ vào Linux là vậy, cứ google rồi copy và paste mấy câu command line nó chỉ vô là được 😱

Chẳng hạn bạn muốn cài yarn thì mấy cái lệnh cần cài trên trang chủ yarn chỉ là

```shell
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

```shell
sudo apt update && sudo apt install yarn
```

Một cái nữa khá ngon mà khá nhiều người code Node.js trên Linux đều xài là `nvm`. Cái này cho phép bạn cài nhiều version Node.js khác nhau trên máy khi nào cần dùng version này khi đổi qua rất đơn giản. Chẳng hạn nãy mình cái Node 14 đang là mới nhất nhưng mà code của bạn chỉ build được bằng Node 12 thì cứ đổi về Node 12 lúc code project đó xong chuyển qua Node 14 để coi có gì mới :)

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Sau khi chạy xong nó sẽ hiện một đoạn code cần bạn thêm vào file .zshrc

```shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
Tốt nhất bạn nên copy đúng đoạn code bạn nhận được khi cài xong nvm



Thêm vô file `.zshrc` xong thì
```shell
source .zshrc
```

Thử coi đã thành công hay chưa
```shell
nvm ls
```



Cuối cùng là `Visual Studio Code`. Nếu bạn dùng editor khác thì cứ bỏ qua cái này nhé. 

Để cài VSCode thì bạn chỉ cần download và cài nó lên Windows như bình thường sau đó cài 1 cái extension là `Remote - WSL` cho VSCode là bạn có thể gõ `code .` ở bất cứ thư mục nào để khởi động VSCode tử trong subsystem Linux của bạn. Quá dễ phải không 😜



Để ý góc trái nhé
![VSCode](/featured-images/setup-wsl2/wsl-2.png)



#### Những thứ hay ho khác

- `Windows Terminal` là một cái terminal rất ngon và dùng chung với WSL2 thì tuyệt vời nhất cuộc đời

- Để thoát shutdown cái máy ảo Linux (dù bạn tắt hết những thứ liên quan thì nó vẫn chạy ngầm bên dưới nhé) thì dùng lệnh ở trong PowerShell

```powershell
wsl --shutdown
```

- Về port thì WSL đã làm sẵn, có nghĩa là trong WSL bạn start 1 cái web ở `localhost:3000` thì mở browser vô `localhost:3000` sẽ connect vô bình thường không khác gì chạy trên Windows (WSL1 không có vụ này đâu 😉)

- Bạn dùng git và sau một thời gian thì cái repo local có một đống branch rác. Nếu có zsh thì chỉ cần gõ câu lệnh dưới là nó sẽ tự động delete hết branch local mà remote đã bị delete.

```shell
gbda
```



#### Vậy là hết rồi, hy vọng bạn có được vài thứ bổ ích sau khi đọc bài viết này 💕