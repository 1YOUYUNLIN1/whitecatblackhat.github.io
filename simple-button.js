window.onload = applyBehavior;
function applyBehavior()
{
    if(document.getElementById)
    {
        var oButton = document.getElementById('clicker');   //����IDΪclicker��Ԫ��

        if(oButton) //����ҵ�
        {
            oButton.onclick=behave;
            //��onclick��ΪӦ���ڰ�ť��������������ʱִ��behave()����
        }
    }
}

function behave(evt)
{
    alert('Ouch!'); //����ʽ�Ի���:"Ouch!"
}