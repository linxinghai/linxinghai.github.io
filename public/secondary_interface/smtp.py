import smtplib
from email.header import Header
from email.mime.text import MIMEText

sender = '2950581738@qq.com'  # 邮件发送账号
receivers = '2950581738@qq.com'  # 接收邮件账号
password = 'aoimettbwwoeddbg'  # 授权码（这个要填自己获取到的）
smtp_server = 'smtp.qq.com'  # 固定写死(非qq邮箱除外)
smtp_port = 465  # 固定端口

# 配置服务器
smtpObj = smtplib.SMTP_SSL(smtp_server, smtp_port)
smtpObj.login(sender, password)

message = MIMEText('1234568797', 'plain', 'utf-8')  # 发送的内容
message['From'] = sender
message['To'] = receivers
subject = 'Python SMTP 邮件测试'
message['Subject'] = Header(subject, 'utf-8')  # 邮件标题

try:
    smtpObj.sendmail(sender, receivers, message.as_string())
    smtpObj.quit()
    print('邮件发送成功')
except smtplib.SMTPException as e:
    print('邮件发送失败--' + str(e))
