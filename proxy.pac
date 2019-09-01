function FindProxyForURL(url, host)
{
	if (host == 'music.yandex.ru' || host == '2ip.ru')
		return "SOCKS 127.0.0.1:9050";
	return "DIRECT";
}
