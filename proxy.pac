function FindProxyForURL(url, host)
{
	if (host == 'music.yandex.ru' || host == '2ip.ru')
		return "SOCKS5 localhost:9050";
	return "DIRECT";
}
